import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

const Profile = () => {
  // Dummy user data (Replace with API data later)
  //   const user = {
  //     name: 'John Doe',
  //     email: 'john.doe@example.com',
  //     profileImage: 'https://via.placeholder.com/150', // Replace with actual image
  //     purchasedCourses: [
  //       'React for Beginners',
  //       'Advanced JavaScript',
  //       'Node.js Crash Course'
  //     ]
  //   };

  const { user } = useSelector((store) => store.auth);

  return (
    <div className=" mt-10 p-6 rounded-lg shadow-lg">
      <div className="text-center">
        <img
          src={user.profile.profilePhoto}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border border-gray-300"
        />
        <h2 className="text-xl font-bold mt-2">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Edit Profile</Button>
          </DialogTrigger >
          <DialogContent className='bg-gray-500'>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Make Changes to your profile here..</DialogDescription>
            </DialogHeader>
            <div>
              <div>
                <Label>Name</Label>
                <Input type='text' placeholder='Enter Your Name'/>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-6">
        <h3 className="text-3xl font-semibold text-center">
          Your Enrolled Courses
        </h3>
        {/* <ul className="mt-2 list-disc list-inside">
          {user.purchasedCourses.length > 0 ? (
            user.purchasedCourses.map((course, index) => (
              <li key={index} className="text-gray-700">{course}</li>
            ))
          ) : (
            <p className="text-gray-500">No courses purchased yet.</p>
          )}
        </ul> */}
      </div>
    </div>
  );
};

export default Profile;
