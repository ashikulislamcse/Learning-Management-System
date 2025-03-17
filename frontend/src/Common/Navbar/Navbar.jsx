import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, User, BookOpen } from "lucide-react";
import Logo from "../../../public/Logo.png";
import { assets } from "../../assets/assets";
import AuthModal from "../../Authentication/AuthModal";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";

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
              <Link to="/profile" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition">
                <User size={18} /> Profile
              </Link>
              <Link to="/my-courses" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition">
                <BookOpen size={18} /> My Courses
              </Link>
              <button className="flex items-center gap-2 p-2 text-left hover:bg-gray-100 rounded-md transition cursor-pointer">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="hidden md:flex items-center gap-5 text-gray-500">
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition"
            onClick={() => setShowModal(true)}
          >
            Create Account
          </button>
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