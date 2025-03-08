import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";

const Courses = () => {
  const isLoading = false;
  return (
    <div className="bg-gray-50 py-2 px-20">
      <div className="max-w-7xl mx-auto p-4 text-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-6 text-gray-800">
          Learn from the Best
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover our top-rated courses across various categories. From coding
          and design to business and wellness, our courses are crafted to
          deliver results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <CourseSkeleton key={index} />
          ))
        ) : (
          <Course />
        )}
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};
