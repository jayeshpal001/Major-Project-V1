import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom"


function Login() {
 
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in", formData);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-400"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/register" className="text-blue-600">Sign Up</Link>
      </p>
    </div>
  </div>
  )
}

export default Login