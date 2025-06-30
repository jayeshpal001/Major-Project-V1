import {
    ArrowRightIcon,
    UserGroupIcon,
    AcademicCapIcon,
    LockClosedIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function LoginGateway() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                    {/* Left Content */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Welcome Back to
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Expert Mentorship
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600">
                            Continue your learning journey or mentor the next generation. 
                            Your personalized dashboard awaits.
                        </p>

                        {/* Login Options */}
                        <div className="flex flex-col gap-6">
                            <Link to="/juniorLogin">
                                <button className="w-full flex items-center justify-between gap-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-[1.02]">
                                    <div className="flex items-center gap-3">
                                        <UserGroupIcon className="w-6 h-6" />
                                        Junior Login
                                    </div>
                                    <LockClosedIcon className="w-5 h-5" />
                                </button>
                            </Link>

                            <Link to="/login">
                                <button className="w-full flex items-center justify-between gap-4 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-[1.02]">
                                    <div className="flex items-center gap-3">
                                        <AcademicCapIcon className="w-6 h-6" />
                                        Mentor Login
                                    </div>
                                    <LockClosedIcon className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>

                        {/* Signup Prompt */}
                        <p className="text-center text-gray-600 mt-6">
                            New to Mentorship Hub?{' '}
                            <Link to="/signup-options" className="text-blue-600 hover:underline font-medium">
                                Create account
                            </Link>
                        </p>
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

                {/* Security Assurance */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[
                        { icon: "🔒", label: "Secure Login" },
                        { icon: "🤝", label: "Verified Mentors" },
                        { icon: "📈", label: "Progress Tracking" },
                        { icon: "💬", label: "24/7 Support" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm flex flex-col items-center gap-2"
                        >
                            <div className="text-2xl">{stat.icon}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}