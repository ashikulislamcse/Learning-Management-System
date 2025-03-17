import { useState } from "react";

const RegisterForm = ({ toggleForm }) => (
  <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create an Account</h2>
    <div className="space-y-4">
      <input 
        type="text" 
        placeholder="Full Name" 
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input 
        type="email" 
        placeholder="Email Address" 
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button 
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        Sign Up
      </button>
    </div>
    <p className="mt-4 text-sm text-center text-gray-600">
      Already have an account? 
      <span className="text-blue-500 cursor-pointer font-medium" onClick={toggleForm}> Log in</span>
    </p>
  </div>
);

const LoginForm = ({ toggleForm }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Login</h2>
    <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
    <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
    <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    <p className="mt-2 text-sm text-gray-600">
      Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>Register</span>
    </p>
  </div>
);

const AuthModal = ({ closeModal }) => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-80 relative">
        <button className="absolute top-2 right-2 text-gray-600 cursor-pointer" onClick={closeModal}>&times;</button>
        {isRegister ? <RegisterForm toggleForm={() => setIsRegister(false)} /> : <LoginForm toggleForm={() => setIsRegister(true)} />}
      </div>
    </div>
  );
};

export default AuthModal;
