// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <HeaderComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
