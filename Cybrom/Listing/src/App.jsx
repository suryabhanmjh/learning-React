import React, { useState } from "react";
import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const App = () => {
  const [data, setData] = useState(EmpData);
  const [editIdx, setEditIdx] = useState(null);
  const [editRow, setEditRow] = useState({});

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setEditRow({ ...data[idx] });
  };

  const handleChange = (e) => {
    setEditRow({ ...editRow, [e.target.name]: e.target.value });
  };

  const handleSave = (idx) => {
    const newData = [...data];
    newData[idx] = editRow;
    setData(newData);
    setEditIdx(null);
  };

  const handleCancel = () => {
    setEditIdx(null);
  };

  return (
    <>
      <h1 align="center">Welcome To Employeeee Records!!!!</h1>
      <hr />
      <table border="1" width="500px">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>EmpNo</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((key, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              {editIdx === idx ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editRow.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="empno"
                      value={editRow.empno || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="department"
                      value={editRow.department || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="salary"
                      value={editRow.salary}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSave(idx)}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{key.name}</td>
                  <td>{key.empno || ""}</td>
                  <td>{key.department || ""}</td>
                  <td>{key.salary}</td>
                  <td>
                    <button onClick={() => handleEdit(idx)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;