import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Foods from './components/Foods';
import Drinks from './components/Drinks';
import axios from 'axios';

const App = () => {
  const addToDashboard = async (product) => {
    await axios.post('http://localhost:5000/api/orders', product);
  };

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-600">Foods Menu</Link>
          <Link to="/drinks" className="text-blue-600">Drinks Menu</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Foods addToDashboard={addToDashboard} />} />
          <Route path="/drinks" element={<Drinks addToDashboard={addToDashboard} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
