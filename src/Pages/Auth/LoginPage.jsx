import React from "react";
import bg from "../../assets/Blend Group 1.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    navigate("/");
  };
  return (
    <div className="flex w-full h-screen bg-black">
      {/* Left Side */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-1/2 bg-cover flex items-center justify-center"
      >
        <div className="w-3/4 h-[80vh] backdrop-blur-sm rounded-3xl flex justify-center items-center text-white">
          <h1 className="text-7xl font-bold">NOUPRO</h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 p-8 bg-white flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-4">Log In your account</h2>
        <p className="text-gray-400 mb-6">
          Log in your account as super admin to see all overview
        </p>

        <form className="space-y-6">
          <div>
            <label className=" block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={handleLogin}
            type="submit"
            className="w-full py-2 mt-4 bg-indigo-600  rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
