import React from "react";
import Login from "./Pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./Pages/Student/Hero.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Pages/Student/Courses.jsx";
import MyLearning from "./Pages/Student/MyLearning.jsx";
import Profile from "./Pages/Student/Profile.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Courses />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
