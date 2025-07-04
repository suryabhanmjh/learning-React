import axios from "axios";
import { useState } from "react";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async () => {
    let api = "http://localhost:3000/employee";
    const response = await axios.post(api, input);
    alert("data inserted");
  };

return(
<>
<h1>Insert Employee data</h1>
Enter id: <input type="text" name="empno" onChange={handleInput}/> <br />
Enter name: <input type="text" name="name" onChange={handleInput}/> <br />
Enter Designation: <input type="text" name="designation" onChange={handleInput}/> <br />
Enter city : <input type="text" name="city" onChange={handleInput}/> <br />

<button onClick={handleSubmit}>Save</button>
</>
)
}
export default Insert;