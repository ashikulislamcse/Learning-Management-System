import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Common/Navbar/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className='flex flex-col bg-[url("/bg_img.png")]'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
