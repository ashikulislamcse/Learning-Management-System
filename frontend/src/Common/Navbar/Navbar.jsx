import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/Logo.png";
import { assets } from "../../assets/assets";
import AuthModal from "../../Authentication/AuthModal";


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 bg-cyan-100/70">
      <Link to="/">
        <img src={Logo} alt="Educator" className="w-28 lg:w-32 cursor-pointer" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition"
          onClick={() => setShowModal(true)}
        >
          Create Account
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <img
          src={assets.user_icon}
          alt="User Icon"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
      </div>

      {/* Auth Modal Popup */}
      {showModal && <AuthModal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default Navbar;
