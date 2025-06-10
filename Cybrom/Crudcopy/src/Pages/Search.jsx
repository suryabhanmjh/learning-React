import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
    const [eno, setEno] = useState("");
    const [mydata, setMydata] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editData, setEditData] = useState({
        id: "",
        empno: "",
        name: "",
        designation: "",
        city: ""
    });

    const handleSubmit = async () => {
        try {
            let api = `http://localhost:3000/employee?empno=${eno}`;
            const response = await axios.get(api);
            setMydata(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleEdit = (employee) => {
        setEditMode(true);
        setEditData(employee);
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/employee/${editData.id}`, editData);
            setEditMode(false);
            handleSubmit(); // Refresh the data
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Employee Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#employees">Employees</Nav.Link>
                            <Nav.Link href="#search">Search</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main Content */}
            <Container className="flex-grow-1 my-4">
                <div className="search-container">
                    <h2 className="mb-4">Search Employee</h2>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Employee Number"
                            value={eno}
                            onChange={(e) => setEno(e.target.value)}
                        />
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Search
                        </button>
                    </div>

                    {/* Edit Form */}
                    {editMode && (
                        <div className="edit-form mb-4">
                            <h3>Edit Employee</h3>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    value={editData.name}
                                    onChange={(e) => setEditData({...editData, name: e.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Designation"
                                    value={editData.designation}
                                    onChange={(e) => setEditData({...editData, designation: e.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    value={editData.city}
                                    onChange={(e) => setEditData({...editData, city: e.target.value})}
                                />
                            </div>
                            <button className="btn btn-success" onClick={handleUpdate}>
                                Update
                            </button>
                            <button className="btn btn-secondary ms-2" onClick={() => setEditMode(false)}>
                                Cancel
                            </button>
                        </div>
                    )}

                    {/* Search Results */}
                    <div className="search-results">
                        {mydata.map((emp, index) => (
                            <div key={index} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Employee Details</h5>
                                    <p>Name: {emp.name}</p>
                                    <p>Employee No: {emp.empno}</p>
                                    <p>Designation: {emp.designation}</p>
                                    <p>City: {emp.city}</p>
                                    <button 
                                        className="btn btn-primary"
                                        onClick={() => handleEdit(emp)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-light py-4 mt-auto">
                <Container>
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Email: info@company.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light">Home</a></li>
                                <li><a href="#" className="text-light">About</a></li>
                                <li><a href="#" className="text-light">Services</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <div className="social-links">
                                <a href="#" className="text-light me-3">Facebook</a>
                                <a href="#" className="text-light me-3">Twitter</a>
                                <a href="#" className="text-light">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default Search;