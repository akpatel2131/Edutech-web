import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
const REACT_APP_GOOGLE_CLIENT_ID="980237700055-a2lhnvphg386rl8hgkpdl6o27v2q94fh.apps.googleusercontent.com"

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    localStorage.setItem("user", JSON.stringify(response));
    alert("Login Successfull");
    navigate("/dashboard");
  };

  const handleLoginFailure = () => {
    alert("Login Failed");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl mb-4">Sign In to EduTech+</h2>

      {/* Google OAuth Provider */}
      <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          scope="https://www.googleapis.com/auth/classroom.courses.readonly" 
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
