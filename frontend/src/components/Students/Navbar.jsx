import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock, FaUser, FaEnvelope, FaRegWindowClose } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

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
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          <button>Become Educator</button>|{' '}
          <Link to="/my-enrollment">My Enrollments</Link>
        </div>
        <button
          onClick={togglePopup}
          className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
        >
          Create Account
        </button>

        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-opacity-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="p-6 w-110 bg-white text-sm rounded-2xl shadow-lg relative">
              <button
                onClick={togglePopup}
                className="absolute top-2 right-2 bg-gray-300 hover:bg-red-500 hover:text-white p-2 rounded-md"
              >
                <FaRegWindowClose size={20} />
              </button>
              <h1 className="text-2xl text-center font-bold mb-4">
                Welcome To Educator
              </h1>
              <h2 className="text-2xl text-center font-semibold mb-4">
                Register
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <div className="flex items-center border rounded-lg p-2">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <div className="flex items-center border rounded-lg p-2">
                  <FaEnvelope className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    className="w-full focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <div className="flex items-center border rounded-lg p-2">
                  <FaLock className="text-gray-500 mr-2" />
                  <input
                    type="password"
                    className="w-full focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <label className="flex items-center text-gray-700">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-blue-500">
                  Forgot Password?
                </Link>
              </div>

              <button className="w-full bg-blue-500 text-white p-2 rounded-md mb-2">
                Sign Up
              </button>
              <p className="text-center">
                Already have an account?{' '}
                <Link to="/" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div>
          <button>Become Educator</button>|{' '}
          <Link to="/my-enrollment">My Enrollments</Link>
        </div>
        <button>
          <img src={assets.user_icon} alt="User Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
