import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between flex-wrap gap-2">
          <h1 className="text-2xl font-bold">EduTech+</h1>
          <div>
            <Link to="/" className="mx-2">
              Home
            </Link>
            <Link to="/about" className="mx-2">
              About
            </Link>
            <Link to="/courses" className="mx-2">
              Courses
            </Link>
            <Link to="/contact" className="mx-2">
              Contact
            </Link>
            <button
              className="mt-4 bg-white text-blue-500 font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold">Learn with EduTech+</h2>
        <p className="mt-4 text-lg">
          Empowering students with personalized learning experiences
        </p>
        <button
          className="mt-8 bg-white text-blue-500 font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate("/login");
          }}
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-bold">Interactive Courses</h4>
              <p className="mt-4">
                Engaging and immersive learning content to boost your skills.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-bold">Expert Instructors</h4>
              <p className="mt-4">
                Learn from industry-leading experts with real-world experience.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-bold">Certification</h4>
              <p className="mt-4">
                Earn certificates to showcase your achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 EduTech+. All rights reserved.</p>
        <div className="mt-2">
          <Link to="/" className="mx-2">
            Privacy Policy
          </Link>
          <Link to="/" className="mx-2">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
