import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Educator Bangladesh</p>
        <p className="text-sm mt-1">Empowering learners with quality education.</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
          <a href="#" className="mx-2 hover:underline">Terms of Service</a>
          <a href="#" className="mx-2 hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;