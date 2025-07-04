import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    empno: '',
    name: '',
    designation: '',
    city: ''
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/employee/${id}`);
      setEmployee(result.data);
    } catch (error) {
      console.error("Error loading employee:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/employee/${id}`, employee);
      alert('Employee updated successfully!');
      navigate('/display');
    } catch (error) {
      console.error("Error updating employee:", error);
      alert('Error updating employee');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Employee No:</label>
          <input
            type="text"
            className="form-control"
            name="empno"
            value={employee.empno}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation:</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City:</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={employee.city}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Employee</button>
      </form>
    </div>
  )
}

export default Update