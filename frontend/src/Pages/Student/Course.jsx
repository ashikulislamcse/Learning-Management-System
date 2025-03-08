import { assets } from "@/assets/assets";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Course = () => {
  return (
    <div>
      <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="relative">
          <img
            src={assets.course_1_thumbnail}
            alt="course"
            className="w-full h-36 object-cover rounded-t-lg"
          />
        </div>
        <CardContent className="px-5 py-4 space-y-3">
          <h1 className="hover:underline font-bold text-lg truncate">
            {assets.course_2_thumbnail}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* <Avatar className="h-8 w-8">
                <AvatarImage
                  src={
                    course.creator?.photoUrl || "https://github.com/shadcn.png"
                  }
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
              <h1 className="font-medium text-sm">Ashik</h1>
            </div>
            <Badge
              className={
                "bg-blue-600 text-white px-2 py-1 text-xs rounded-full"
              }
            >
              10
            </Badge>
          </div>
          <div className="text-lg font-bold">
            <span>₹200</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Course;
