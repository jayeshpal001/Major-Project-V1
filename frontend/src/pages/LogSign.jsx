import {
    ArrowRightIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function LogSign() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                    {/* Left Content */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Transform Your Career with
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Expert Mentorship
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600">
                            Connect with industry professionals or share your knowledge. Your
                            journey to success starts here.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/juniorSignup">
                                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105">
                                    <UserGroupIcon className="w-6 h-6" />
                                    Find Your Mentor
                                    <ArrowRightIcon className="w-5 h-5" />
                                </button>
                            </Link>

                            <Link to="/mentorSignup">
                                <button className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105">
                                    <AcademicCapIcon className="w-6 h-6" />
                                    Become a Mentor
                                    <ArrowRightIcon className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex-1 hidden md:block">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3749/3749784.png"
                            alt="Mentorship Illustration"
                            className="w-full h-auto object-contain animate-float"
                        />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[
                        { number: "10K+", label: "Active Mentors" },
                        { number: "50+", label: "Industries" },
                        { number: "95%", label: "Success Rate" },
                        { number: "24/7", label: "Support" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm"
                        >
                            <div className="text-2xl font-bold text-blue-600">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
