// src/components/ListEmployeeComponent.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((response) => setEmployees(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-fluid px-5 mt-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold">List Employees</h2>
        <Link to="/add-employee" className="btn btn-primary mt-2">
          Add Employee
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.emailId}</td>
                  <td>
                    <Link
                      to={`/edit-employee/${emp.id}`}
                      className="btn btn-info btn-sm me-2"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        EmployeeService.deleteEmployee(emp.id).then(() =>
                          setEmployees((prev) =>
                            prev.filter((e) => e.id !== emp.id)
                          )
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-muted">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
