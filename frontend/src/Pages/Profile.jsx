import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
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
      </div>
      <div className="mt-6">
        <h3 className="text-3xl font-semibold text-center">
          Your Enrolled Courses
        </h3>
      </div>
    </div>
  );
};

export default Profile;

// Profile Page Here
