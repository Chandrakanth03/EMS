// src/components/HeaderComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <Link to="/" className="navbar-brand fs-4 fw-semibold">
            Employee Management Application
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

