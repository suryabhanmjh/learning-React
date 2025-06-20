import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Insert = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/employee", input);
      alert("Data inserted successfully!");
      navigate('/display');
    } catch (error) {
      alert("Error inserting data");
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Insert Employee Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Employee ID:</label>
          <input type="text" className="form-control" name="empno" onChange={handleInput} />
        </div>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" onChange={handleInput} />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation:</label>
          <input type="text" className="form-control" name="designation" onChange={handleInput} />
        </div>
        <div className="mb-3">
          <label className="form-label">City:</label>
          <input type="text" className="form-control" name="city" onChange={handleInput} />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

export default Insert;