import { assets } from "@/assets/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";

const Course = () => {
  return (
    <div>
      <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="relative">
          <img
            src={assets.course_1_thumbnail}
            alt="Course 1"
            className="w-full h-35 object-cover rounded-t-lg"
          />
        </div>
        <CardContent className="py-4 px-5 space-y-3">
          <h1 className="hover:underline font-bold text-lg truncate">
            Text to Image Complete Course in Bangla- 2025
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-7 w-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-medium text-sm">Ashik-MERN</h1>
            </div>
            <Badge className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
              Advance
            </Badge>
          </div>
          <div className="text-start text-lg font-bold">
            <span>$49</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Course;
