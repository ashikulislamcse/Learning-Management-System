import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { motion } from "framer-motion";

const AuthModal = ({ closeModal }) => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="fixed lg:mt-15 inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-80 relative"
      >
        <button
          className="absolute text-2xl hover:text-3xl transition duration-300 px-2 rounded-full bg-gray-100 hover:bg-gray-300 hover:text-red-500 top-2 right-2 text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </button>
        {isRegister ? (
          <Register toggleForm={() => setIsRegister(false)} />
        ) : (
          <Login toggleForm={() => setIsRegister(true)} />
        )}
      </motion.div>
    </div>
  );
};

export default AuthModal;
