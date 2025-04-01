import React, { useState, useEffect } from "react";
import { FiArrowRight, FiMessageSquare, FiUsers, FiMap } from "react-icons/fi";
import { FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Hero from "../assets/hero.png";

const words = ["Accelerate", "Boost", "Level-Up", "Fast-Track"];

export const Home = () => {
  // Existing typing effect logic
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const typingSpeed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex(prev => prev + 1);
      } else if (!isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="scroll-smooth w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-8 md:w-1/2">
            <h1 className="font-bold text-4xl md:text-6xl leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {words[index].substring(0, charIndex)}
              </span>
              <span className="ml-2 w-1 h-12 bg-blue-600 animate-blink" />
              Your Dev Career with Expert Guidance
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl">
              Connect with senior developers to level up your skills, navigate career decisions, 
              and land your dream job in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all">
                Find Your Mentor
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-500 transition-all">
                Become a Mentor
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="mt-8 flex items-center gap-6">
              <span className="text-gray-500">Trusted by developers at:</span>
              <div className="flex gap-6 text-2xl">
                <FaGoogle className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                <FaMicrosoft className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                <FaAmazon className="text-gray-600 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <img 
              src={Hero} 
              alt="Mentorship illustration" 
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FiUsers size={40} />, title: "Find Your Mentor", text: "Browse verified experts by tech stack or experience" },
            { icon: <FiMessageSquare size={40} />, title: "Get Answers", text: "Ask questions in public forums or private chats" },
            { icon: <FiMap size={40} />, title: "Follow Roadmaps", text: "Step-by-step guides for each semester of your journey" },
          ].map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Mentors Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Mentors
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <img 
                src={`https://randomuser.me/api/portraits/men/${i+40}.jpg`}
                alt="Mentor"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">John Doe</h3>
              <p className="text-gray-500 text-center mb-4">Senior Full-Stack Developer</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {["React", "Node.js", "AWS"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full py-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-blue-600 transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Career Path Preview */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Development Career Roadmap
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Semesters 1-4: Foundations</h3>
              <ul className="space-y-3">
                {["Programming Basics", "Data Structures", "Web Fundamentals", "Version Control"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FiArrowRight className="text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Semesters 5-8: Specialization</h3>
              <ul className="space-y-3">
                {["Advanced Frameworks", "Cloud Computing", "System Design", "Interview Prep"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FiArrowRight className="text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success Stories
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              text: "This platform helped me land my first React developer position. The mentorship I received was invaluable!",
              author: "Jayesh Pal",
              role: "Frontend Developer @Google"
            },
            {
              text: "The semester roadmaps gave me clear direction when I felt lost in my learning journey.",
              author: "Taniya Pal",
              role: "Full-Stack Developer @Microsoft"
            },
            {
                text: "The semester roadmaps gave me clear direction when I felt lost in my learning journey.",
                author: "Deepika Sen",
                role: "Backend @Google"
              },
              {
                text: "This platform helped me land my first React developer position. The mentorship I received was invaluable!",
                author: "Yash Sarvate",
                role: "Python Developer @Infosys"
              },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border-l-4 border-blue-600 shadow-sm">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-gray-500 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};