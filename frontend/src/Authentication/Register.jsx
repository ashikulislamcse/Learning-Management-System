import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { useState } from "react";

const RegisterForm = ({ toggleForm }) => {
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
        Create Your Account
        <br />
        <strong className="text-bold">
          <span className="text-[#FE4F2D]">Educator</span>BD
        </strong>
      </h2>
      <div className="space-y-4">
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full pl-10 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
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

        {/* Image Upload Field */}
        <div className="flex flex-col items-center space-y-2">
          <label className="relative flex flex-col items-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-15 h-15 rounded-full object-cover border border-gray-300"
              />
            ) : (
              <div className="w-15 h-15 flex items-center justify-center rounded-full border border-gray-300 bg-white">
                <FiCamera className="text-gray-500 text-2xl" />
              </div>
            )}
          </label>
        </div>

        <button className="w-full bg-blue-600 text-white p-1 rounded-lg font-medium hover:bg-blue-700 transition duration-300 cursor-pointer">
          Sign Up
        </button>
      </div>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?
        <span
          className="text-blue-500 cursor-pointer font-medium"
          onClick={toggleForm}
        >
          {" "}
          Log in
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;