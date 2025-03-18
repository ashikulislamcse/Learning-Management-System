import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Common/Navbar/Navbar";
import Home from "./Pages/Home";
import RegisterPage from "./Authentication/Register";
import LoginPage from "./Authentication/Login";
import Profile from "./Pages/Profile";
import Footer from "./Common/Footer";
import CourseList from "./Pages/CourseList";

const App = () => {
  return (
    <div className='flex flex-col bg-[url("/bg_img.png")]'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course-list" element={<CourseList />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
