import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "../assets/hero.png";

const words = [
  "Accelerate",
  "Boost",
  "Elevate",
  "Supercharge",
  "Enhance",
  "Fast-Track",
  "Advance",
  "Power-Up",
  "Transform",
  "Level-Up",
  "Ignite",
];

export const Home = () => {
  const [index, setIndex] = useState(0); // Track word index
  const [charIndex, setCharIndex] = useState(0); // Track letter count
  const [isDeleting, setIsDeleting] = useState(false); // Deleting state

  useEffect(() => {
    const currentWord = words[index];

    const updateText = () => {
      setCharIndex((prevCharIndex) =>
        isDeleting ? prevCharIndex - 1 : prevCharIndex + 1
      );
    };

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length); // Next word
    }

    const typingSpeed = isDeleting ? 200 : 250;
    const timer = setTimeout(updateText, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="scroll-smooth w-full min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-between p-6 md:p-10 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-5 text-center md:text-left w-full md:w-1/2">
          <h1 className="font-semibold text-3xl md:text-5xl">
            <span className="text-blue-700 text-6xl">
              {words[index].substring(0, charIndex)}
            </span>
            <span className="font-bold text-5xl bg-blue-800 animate-ping">&nbsp; &nbsp;</span>
            &nbsp; Your Dev Career with Expert Guidance
          </h1>
          <p className="text-gray-600 text-lg md:text-2xl">
            Connect with experienced senior developers who can help you level up
            your skills, navigate career decisions, and grow faster.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-black text-white p-3 rounded-lg w-40 md:w-48">
              Find Your Mentor
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            className="w-3/4 md:w-full max-w-sm md:max-w-xl"
            src={Hero}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};
