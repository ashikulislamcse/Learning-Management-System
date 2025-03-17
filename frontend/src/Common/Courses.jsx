import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummyCourses } from "../assets/assets";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);

  const getAllCourses = () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="py-16 md:px-40 px-8 text-center">
      <h1 className="text-3xl font-medium text-gray-800">
        Learn from the Best
      </h1>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        molestias dolor quisquam facere nemo itaque.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to="/course-list"
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show All Courses
      </Link>
    </div>
  );
};

export default Courses;
