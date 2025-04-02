// import { useState, useEffect } from "react";
import { FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa";
import useTypingEffect from "../../hooks/useTypingEffect";
import HeroImage from "../../assets/images/hero.png";

const words = ["Accelerate", "Boost", "Level-Up", "Fast-Track"];

export default function HeroSection() {
  const typingText = useTypingEffect(words);

  return (
    <section className="py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {typingText}
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
            src={HeroImage}
            alt="Mentor guiding a junior developer through code review"
            className="w-full max-w-xl mx-auto hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}