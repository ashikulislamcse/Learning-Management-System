import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock, FaUser, FaEnvelope, FaRegWindowClose } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 ${
        isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
      }`}
    >
      <img
        src={assets.logo}
        alt="Educator"
        className="w-28 lg:w-32 cursor-pointer"
      />
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="hidden items-center gap-5">
          <button className="hover:text-blue-600 transition-colors">Become Educator</button>
          <span>|</span>
          <Link to="/my-enrollment" className="hover:text-blue-600 transition-colors">
            My Enrollments
          </Link>
        </div>
        <button
          onClick={togglePopup}
          className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <button onClick={togglePopup}>
          <img src={assets.user_icon} alt="User Icon" className="w-8 h-8 cursor-pointer" />
        </button>
      </div>

      {showPopup && (
        <PopupForm 
          isLogin={isLogin} 
          togglePopup={togglePopup} 
          toggleForm={toggleForm} 
        />
      )}
    </div>
  );
};

const PopupForm = ({ isLogin, togglePopup, toggleForm }) => (
  <motion.div
    className="fixed inset-0 mt-10 bg-opacity-30 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="p-6 w-96 bg-white text-sm rounded-2xl shadow-lg relative">
      <button
        onClick={togglePopup}
        className="absolute top-2 right-2 bg-gray-300 hover:bg-red-500 hover:text-white p-2 rounded-md cursor-pointer"
      >
        <FaRegWindowClose size={20} />
      </button>

      <h1 className="text-2xl text-center font-bold mb-4">
        Welcome To Educator
      </h1>
      
      <h2 className="text-2xl text-center font-semibold mb-4">
        {isLogin ? 'Login' : 'Register'}
      </h2>

      {!isLogin && (
        <InputField
          label="Name"
          type="text"
          placeholder="Enter your name"
          icon={<FaUser className="text-gray-500" />}
        />
      )}

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon={<FaEnvelope className="text-gray-500" />}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon={<FaLock className="text-gray-500" />}
      />

      <div className="flex justify-between mb-4">
        <label className="flex items-center text-gray-700">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <button className="text-blue-500 hover:underline cursor-pointer">Forgot Password?</button>
      </div>

      <button className="w-full bg-blue-500 text-white p-2 rounded-md mb-2 cursor-pointer hover:bg-blue-600 transition">
        {isLogin ? 'Login' : 'Sign Up'}
      </button>

      <p className="text-center">
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
        <button onClick={toggleForm} className="text-blue-500 hover:underline cursor-pointer">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  </motion.div>
);

const InputField = ({ label, type, placeholder, icon }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <div className="flex items-center border rounded-lg p-2 focus-within:border-blue-500">
      {icon}
      <input
        type={type}
        className="w-full focus:outline-none ml-2"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default Navbar;
