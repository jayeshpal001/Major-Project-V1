import React from "react";
import Navbar from "./Navbar";
import Hero from "../assets/hero.png"
export const Home = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="flex justify-between p-20 items-center" >
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl">Accelerate Your Dev Career with Expert Guidance</h1>
            <p className="text-gray-600">
              Connect with experienced senior developers who can help you level
              p your skills, navigate career decisions, and grow faster.
            </p>
            <button className="bg-black text-white p-3 rounded-lg w-2/8">Find Your Mentor</button>
          </div>
          <img src={Hero} alt="" />
        </div>
      </div>
    </>
  );
};
