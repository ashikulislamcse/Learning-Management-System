import { assets } from "@/assets/assets";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 bg-cyan-200/60">
        <a href="/">
          <img src={assets.logo} alt="" className="w-28 lg:w-32" />
        </a>
        <a href="">
          <button className="hidden md:flex bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
            Create Account
          </button>
        </a>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
          <a href="">
            <img
              src={assets.user_icon}
              alt="User Icon"
              className="w-8 h-8 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
