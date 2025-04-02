import React, { useState } from "react";

export const SignUpMentor = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        company: '',
        collegeName: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
      };
    
      return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
          <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Left side with image */}
            <div className="w-1/2 hidden md:block">
              <img
                src="https://via.placeholder.com/600x800" // Replace with your image URL
                alt="Mentor"
                className="w-full h-full object-cover"
              />
            </div>
    
            {/* Right side with form */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Mentor Sign Up</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
    
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-600">Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-600">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <div>
                  <label htmlFor="collegeName" className="block text-sm font-medium text-gray-600">College Name</label>
                  <input
                    type="text"
                    id="collegeName"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
