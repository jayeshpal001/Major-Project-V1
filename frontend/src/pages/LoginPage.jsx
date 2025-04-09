import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LockClosedIcon, EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Axios from 'axios';

function LoginPage() {
  const [loginEmail ,setLoginEmail]=useState('');
   const [loginPassward,sentLoginPassword]=useState('')
   const [error,setError]=useState()

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in" );
    try{
      const response=await Axios.post('http://localhost:3002/login', {
      
        LoginEmail:  loginEmail,
        LoginPassword: loginPassward
    }) 
    console.log('Login successful');
    console.log(response.data.user); // Optional: store user in localStorage
    setError("")
  
    alert(response.data.message);

    }catch(error)
    {
      console.error('Login error:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Invalid credentials');
      setError("Invalid login credentials.")
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left side with image */}
        <div className="hidden md:block relative w-1/2 bg-gradient-to-tr from-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center p-8">
            <div className="text-white text-center space-y-6">
              <UserCircleIcon className="w-20 h-20 mx-auto text-white/90" />
              <h2 className="text-4xl font-bold">Welcome Back!</h2>
              <p className="text-xl font-light">Unlock your personalized learning journey</p>
              <div className="mt-8 space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <LockClosedIcon className="w-6 h-6 text-green-400" />
                  <span>Secure & encrypted login</span>
                </div>
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="w-6 h-6 text-green-400" />
                  <span>Access to expert mentors</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back!
            </h2>
            <p className="text-gray-500">Please sign in to continue</p>
          </div>
           
           

          <form onSubmit={handleSubmit} className="space-y-6">

          {error && (
  <div className="text-red-600 text-sm font-medium -mt-4 mb-2 px-1">
    {error}
  </div>
)}

            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={loginEmail}
                onChange={(e)=>setLoginEmail(e.target.value) }
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginPassward}
                onChange={(e)=>sentLoginPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8">
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div> */}

            {/* <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-50">
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="h-5 w-5" />
                <span className="ml-2 text-gray-600">Google</span>
              </button>
              <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-50">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="h-5 w-5" />
                <span className="ml-2 text-gray-600">Facebook</span>
              </button>
            </div> */}

            <p className="mt-8 text-center text-gray-500">
              Don't have an account?{" "}
              <Link to="/logSign" className="text-blue-600 hover:underline">Create account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;