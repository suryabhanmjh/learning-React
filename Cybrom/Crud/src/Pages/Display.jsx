import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    empno: '',
    name: '',
    designation: '',
    city: ''
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const res = await axios.get('http://localhost:3000/employee');
      setEmployees(res.data);
    } catch (error) {
      console.error('Error loading employees:', error);
    }
  };

  const handleEditClick = (emp) => {
    setEditId(emp.id);
    setEditData({
      empno: emp.empno,
      name: emp.name,
      designation: emp.designation,
      city: emp.city
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditSave = async (id) => {
    try {
      await axios.put(`http://localhost:3000/employee/${id}`, editData);
      setEditId(null);
      loadEmployees();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleEditCancel = () => {
    setEditId(null);
  };

  return (
    <div className="container mt-4">
      <h2>Employee List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Name</th>
            <th>Designation</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              {editId === emp.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="empno"
                      value={editData.empno}
                      onChange={handleEditChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleEditChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="designation"
                      value={editData.designation}
                      onChange={handleEditChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="city"
                      value={editData.city}
                      onChange={handleEditChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleEditSave(emp.id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={handleEditCancel}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{emp.empno}</td>
                  <td>{emp.name}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.city}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEditClick(emp)}
                    >
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;