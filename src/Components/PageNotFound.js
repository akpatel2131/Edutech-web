import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    const isAuthenticated = !!localStorage.getItem("user");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        to={isAuthenticated ? "/dashboard" : "/"}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
