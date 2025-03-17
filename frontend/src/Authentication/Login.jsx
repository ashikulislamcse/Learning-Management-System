import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { useState } from "react";

const LoginForm = ({ toggleForm }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-blue-100 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Login Your Account
        <br />
        <strong className="text-bold">
          <span className="text-[#FE4F2D]">Educator</span>BD
        </strong>
      </h2>
      <div className="space-y-4">
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Role Selection */}
        <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-gray-300">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="role" value="student" className="accent-blue-600" />
            <span className="text-gray-700 font-medium">Student</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="role" value="instructor" className="accent-blue-600" />
            <span className="text-gray-700 font-medium">Instructor</span>
          </label>
        </div>

        <button className="w-full bg-blue-600 text-white p-1 rounded-lg font-medium hover:bg-blue-700 transition duration-300 cursor-pointer">
          Login
        </button>
      </div>
      <p className="mt-4 text-sm text-center text-gray-600">
        Don't have an account?
        <span
          className="text-blue-500 cursor-pointer font-medium"
          onClick={toggleForm}
        >
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
};

export default LoginForm;