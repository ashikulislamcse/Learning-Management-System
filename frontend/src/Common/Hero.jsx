import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Button } from '../components/ui/button';


const Hero = () => {
  return (
    <div className="bg-cyan-100/80">
      <div className="flex flex-col bg-cyan-300/30 py-10 w-full text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold transition-transform duration-500 hover:scale-105 mt-20">
          Find the Best <strong className="text-red-700">Course</strong> For You
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          We bring together world-class instructors, interactive content, <br />
          and a supportive community to help you achieve your personal and professional goals.
        </p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Courses"
              className="px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-600 cursor-pointer hover:text-red-600">
              <FaSearch size={24} />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="bg-white w-32 py-5 px-4 text-black hover:bg-cyan-600 hover:text-white transition-all duration-200 font-bold text-1xl cursor-pointer">
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;