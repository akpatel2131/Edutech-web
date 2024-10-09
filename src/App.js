import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./Components/Login"
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
