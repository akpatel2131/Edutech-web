import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    localStorage.setItem("user", JSON.stringify(response));
    toast.success("Login Success:", 3000);
    navigate("/dashboard");
  };

  const handleLoginFailure = (error) => {
    toast.error("Login Failed:", 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl mb-4">Sign In to EduTech+</h2>

      {/* Google OAuth Provider */}
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
