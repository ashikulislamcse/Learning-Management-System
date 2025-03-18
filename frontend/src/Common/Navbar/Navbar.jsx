import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, User, BookOpen } from "lucide-react";
import Logo from "../../../public/Logo.png";
import { assets } from "../../assets/assets";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const user = false;

  return (
    <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 bg-cyan-100/70">
      <Link to="/">
        <img
          src={Logo}
          alt="Educator"
          className="w-28 lg:w-32 cursor-pointer"
        />
      </Link>

      {/* Desktop Menu */}
      {user ? (
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer hover:shadow-lg transition">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-44 p-2 bg-white shadow-lg rounded-md border">
            <div className="flex flex-col gap-2">
              <Link
                to="/profile"
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition"
              >
                <User size={18} /> Profile
              </Link>
              <Link
                to="/my-courses"
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition"
              >
                <BookOpen size={18} /> My Courses
              </Link>
              <button className="flex items-center gap-2 p-2 text-left hover:bg-gray-100 rounded-md transition cursor-pointer">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="hidden md:flex gap-3">
          <Button
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold p-3 rounded-lg shadow-lg transition duration-300 ease-in-out hover:from-green-600 hover:to-green-700 hover:shadow-xl flex items-center gap-2"
            asChild
          >
            <Link to="/login">
              <FaSignInAlt className="text-lg" />
              Login
            </Link>
          </Button>
          <Button
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold p-3 rounded-lg shadow-lg transition duration-300 ease-in-out hover:from-blue-600 hover:to-blue-700 hover:shadow-xl flex items-center gap-2"
            asChild
          >
            <Link to="/register">
              <FaUserPlus className="text-lg" />
              Register
            </Link>
          </Button>
        </div>
      )}

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <img
          src={assets.user_icon || "https://via.placeholder.com/40"}
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
