import React from "react";
import Navbar from "./Navbar";
import Hero from "../assets/hero.png";

export const Home = () => {
  return (
    <>
      <div className="scroll-smooth w-full min-h-screen">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-between p-6 md:p-10 items-center">
          {/* Left Section */}
          <div className="flex flex-col gap-5 text-center md:text-left w-full md:w-1/2">
            <h1 className="font-bold text-3xl md:text-5xl">
              Accelerate Your Dev Career with Expert Guidance
            </h1>
            <p className="text-gray-600 text-lg md:text-2xl">
              Connect with experienced senior developers who can help you level
              up your skills, navigate career decisions, and grow faster.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-black text-white p-3 rounded-lg w-40 md:w-48">
                Find Your Mentor
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img className="w-3/4 md:w-full max-w-sm md:max-w-md" src={Hero} alt="Hero" />
          </div>
        </div>
      </div>
    </>
  );
};
