import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummyCourses } from "../assets/assets";
import CourseCard from "../Common/CourseCard";

const CourseList = () => {
  const [allCourses, setAllCourses] = useState([]);

  const getAllCourses = () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="py-16 md:px-40 px-8 text-center">
      <h1 className="text-3xl font-medium text-gray-800">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
