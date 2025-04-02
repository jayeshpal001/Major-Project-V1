import React, { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiMessageSquare,
  FiUsers,
  FiMap,
  FiMail,
} from "react-icons/fi";
import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Hero from "../assets/hero.png";
import JayeshImage from "../assets/jayesh.jpg";
import TaniyaImage from "../assets/taniya.png";
// import DeepikaImage from "../assets/deepika.jpg";

const words = ["Accelerate", "Boost", "Level-Up", "Fast-Track"];

export const Home = () => {
  // Typing effect logic
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For skeleton loaders

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentWord = words[index];
    const typingSpeed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
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
              Connect with senior developers to level up your skills, navigate
              career decisions, and land your dream job in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95">
                Find Your Mentor
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-500 transition-all hover:shadow-md">
                Become a Mentor
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <span className="text-gray-500 whitespace-nowrap">
                Trusted by developers at:
              </span>
              <div className="flex gap-6 text-2xl">
                <FaGoogle className="text-gray-600 hover:text-blue-600 transition-colors" />
                <FaMicrosoft className="text-gray-600 hover:text-blue-600 transition-colors" />
                <FaAmazon className="text-gray-600 hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src={Hero}
              alt="Mentor guiding a junior developer through code review"
              className="w-full max-w-xl mx-auto hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
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
            {
              icon: <FiUsers size={40} />,
              title: "Find Your Mentor",
              text: "Browse verified experts by tech stack or experience",
            },
            {
              icon: <FiMessageSquare size={40} />,
              title: "Get Answers",
              text: "Ask questions in public forums or private chats",
            },
            {
              icon: <FiMap size={40} />,
              title: "Follow Roadmaps",
              text: "Step-by-step guides for each semester of your journey",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
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

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6">
                <div className="animate-pulse bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4"></div>
                <div className="animate-pulse bg-gray-200 h-6 w-3/4 mx-auto mb-4"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-1/2 mx-auto mb-4"></div>
                <div className="flex justify-center gap-2 mb-4">
                  <div className="animate-pulse bg-gray-200 h-6 w-16 rounded-full"></div>
                  <div className="animate-pulse bg-gray-200 h-6 w-16 rounded-full"></div>
                </div>
                <div className="animate-pulse bg-gray-200 h-10 w-full rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jayesh Pal",
                role: "Senior Full-Stack Developer",
                skills: ["React", "Node.js", "AWS"],
                img: JayeshImage,
              },
              {
                name: "Taniya Pal",
                role: "Frontend Architect",
                skills: ["JavaScript", "UX Design", "TypeScript"],
                img: TaniyaImage,
              },
              {
                name: "Deepika Sen",
                role: "Cloud Specialist",
                skills: ["AWS", "DevOps", "Python"],
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((mentor, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 hover:border-blue-500 border border-transparent"
              >
                <img
                  src={mentor.img}
                  alt={`${mentor.name}, ${mentor.role}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  {mentor.name}
                </h3>
                <p className="text-gray-500 text-center mb-4">{mentor.role}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {mentor.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-blue-600 transition-colors font-medium">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Career Path Preview */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Development Career Roadmap
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4">
                Semesters 1-4: Foundations
              </h3>
              <ul className="space-y-3">
                {[
                  "Programming Basics",
                  "Data Structures",
                  "Web Fundamentals",
                  "Version Control",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 group">
                    <FiArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4">
                Semesters 5-8: Specialization
              </h3>
              <ul className="space-y-3">
                {[
                  "Advanced Frameworks",
                  "Cloud Computing",
                  "System Design",
                  "Interview Prep",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 group">
                    <FiArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">
                      {item}
                    </span>
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
              role: "Frontend Developer @Google",
            },
            {
              text: "The semester roadmaps gave me clear direction when I felt lost in my learning journey.",
              author: "Taniya Pal",
              role: "Full-Stack Developer @Microsoft",
            },
            {
              text: "I went from beginner to AWS Certified in 8 months following the cloud roadmap.",
              author: "Deepika Sen",
              role: "Cloud Engineer @Amazon",
            },
            {
              text: "My mentor helped me negotiate a 30% salary increase during my job switch.",
              author: "Yash Sarvate",
              role: "Python Developer @Infosys",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-gray-500 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 text-center">
          {[
            { value: "5K+", label: "Mentees Helped" },
            { value: "200+", label: "Expert Mentors" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "1.2K", label: "Jobs Landed" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Join our community of developers and start learning from the best.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
              Join as Mentee
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-100 transition-all">
              Become a Mentor
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white px-6 md:px-20 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <FiMail className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            Get Career Tips in Your Inbox
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-20">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">DevMentor</h3>
            <p className="text-gray-400">
              Connecting junior developers with experienced mentors to
              accelerate career growth.
            </p>
            <div className="flex gap-4 mt-6 text-xl">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {[
                "How it Works",
                "Browse Mentors",
                "Success Stories",
                "Pricing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Blog", "Guides", "FAQ", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Code of Conduct"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 DevMentor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
