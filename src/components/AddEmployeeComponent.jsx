// src/components/AddEmployeeComponent.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmailId(response.data.emailId);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then(() => navigate('/employees'))
        .catch((error) => console.log(error));
    } else {
      EmployeeService.createEmployee(employee)
        .then(() => navigate('/employees'))
        .catch((error) => console.log(error));
    }
  };

  const title = () => (
    <h2 className="text-center mb-4 fw-bold">{id ? 'Update Employee' : 'Add Employee'}</h2>
  );

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-6">
        <div className="card shadow rounded-4">
          <div className="card-body">
            {title()}
            <form onSubmit={saveOrUpdateEmployee}>
              <div className="mb-3">
                <label className="form-label fw-semibold">First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Email Id:</label>
                <input
                  type="email"
                  className="form-control"
                  value={emailId}
                  required
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success px-4">
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger px-4">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
