import React, { useState } from "react";
import { AcademicCapIcon, LockClosedIcon, UserCircleIcon, BriefcaseIcon, BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Axios from "axios";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
        try{
            const response=await Axios.post('http://localhost:3002/mentorSignup', {
                first_name: formData.firstName,
                last_name: formData.lastName,
                job_title: formData.jobTitle,
                company: formData.company,
                college: formData.collegeName,
                email: formData.email,
                password: formData.password
              }) 
            console.log('Mentor has been created')
            alert(response.data.message)

        }catch(error)
        {
         console.error('Error during signup :' ,error)
         alert(error.response?.data?.message || 'Something went wrong!')
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
            <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Left side with image */}
                <div className="hidden md:block relative w-1/2 bg-gradient-to-tr from-blue-600 to-purple-600">
                    <div className="absolute inset-0 bg-opacity-30 bg-black flex items-center justify-center p-8">
                        <div className="text-white text-center space-y-6">
                            <AcademicCapIcon className="w-20 h-20 mx-auto text-white/90" />
                            <h2 className="text-4xl font-bold">Join Our Mentor Community</h2>
                            <p className="text-xl font-light">Share your expertise and shape the future of aspiring professionals</p>
                            <div className="mt-8 space-y-2 text-left">
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="w-6 h-6 text-green-400" />
                                    <span>Connect with passionate learners</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="w-6 h-6 text-green-400" />
                                    <span>Build your professional network</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="w-6 h-6 text-green-400" />
                                    <span>Enhance your leadership skills</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side with form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Become a Mentor
                        </h2>
                        <p className="text-gray-500">Start your journey as a mentor in 3 simple steps</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <UserCircleIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="relative">
                                <UserCircleIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <BriefcaseIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                id="jobTitle"
                                name="jobTitle"
                                placeholder="Job Title"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <BuildingOffice2Icon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="relative">
                                <AcademicCapIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    id="collegeName"
                                    name="collegeName"
                                    placeholder="College Name"
                                    value={formData.collegeName}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="relative">
                            <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Create Mentor Account
                        </button>
                    </form>

                    <p className="mt-6 text-center text-gray-500">
                        Already have an account?{" "}
                        <Link to="/loginGateway" className="text-blue-600 hover:underline">Log in here</Link>
                        
                    </p>
                </div>
            </div>
        </div>
    );
};