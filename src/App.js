import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Analytics from "./Components/Analytics";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const isAuthenticated = !!localStorage.getItem("user");
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/dashboard/analytics" element={<Analytics />}/>
          <Route path="/page-not-found" element={<PageNotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
