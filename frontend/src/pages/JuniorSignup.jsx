import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon, UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from "@heroicons/react/24/solid";
function JuniorSignup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left side - Image Section */}
        <div className="hidden md:block relative w-1/2 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-white text-center space-y-6">
              <AcademicCapIcon className="w-20 h-20 mx-auto text-white/90" />
              <h2 className="text-4xl font-bold">Start Your Learning Journey</h2>
              <p className="text-xl font-light">Connect with expert mentors and accelerate your growth</p>
              <div className="mt-8 space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-6 h-6 text-green-400" />
                  <span>Personalized mentorship matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-6 h-6 text-green-400" />
                  <span>Access to exclusive resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-6 h-6 text-green-400" />
                  <span>Community support network</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join as a Junior
            </h2>
            <p className="text-gray-500">Create your account in 30 seconds</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and 
                <a href="#" className="text-purple-600 hover:underline"> Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8">
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div> */}

            {/* <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-50">
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="h-5 w-5" />
                <span className="ml-2 text-gray-600">Google</span>
              </button>
              <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-50">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="GitHub" className="h-5 w-5" />
                <span className="ml-2 text-gray-600">GitHub</span>
              </button>
            </div> */}

            <p className="mt-8 text-center text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-600 hover:underline">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JuniorSignup;