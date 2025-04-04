import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import Logo from "../../../public/Logo.png";
import { PiSlideshowBold } from "react-icons/pi";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../../Utils/constant";
import { setUser } from "../../Redux/authSlice";
import { toast } from "sonner";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 bg-cyan-100/70">
      <Link to="/">
        <img src={Logo} alt="Educator" className="w-24 sm:w-28 lg:w-32 cursor-pointer" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {user ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer hover:shadow-lg transition">
                <AvatarImage src={user?.profile?.profilePhoto} alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-44 p-2 bg-white shadow-lg rounded-md border">
              <div className="flex flex-col gap-2">
                {user.role === "instructor" ? (
                  <>
                    <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition">
                      <PiSlideshowBold size={18} /> Dashboard
                    </Link>
                    <button onClick={logoutHandler} className="flex items-center gap-2 p-2 text-left hover:bg-gray-100 rounded-md transition cursor-pointer">
                      <LogOut size={18} /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/profile" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition">
                      <User size={18} /> Profile
                    </Link>
                    <button onClick={logoutHandler} className="flex items-center gap-2 p-2 text-left hover:bg-gray-100 rounded-md transition cursor-pointer">
                      <LogOut size={18} /> Logout
                    </button>
                  </>
                )}
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg shadow-md transition flex items-center gap-2">
              <Link to="/login" onClick={() => setShowModal(false)}>
                <FaSignInAlt className="text-lg" /> Login
              </Link>
            </Button>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg shadow-md transition flex items-center gap-2">
              <Link to="/register" onClick={() => setShowModal(false)}>
                <FaUserPlus className="text-lg" /> Register
              </Link>
            </Button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setShowModal(!showModal)}>
          <Avatar className="cursor-pointer hover:shadow-lg transition">
            <AvatarImage src={user?.profile?.profilePhoto || assets.user_icon} alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </button>
      </div>

      {showModal && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-md p-3 flex flex-col gap-2 border">
          {user ? (
            user.role === "instructor" ? (
              <>
                <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition" onClick={() => setShowModal(false)}>
                  <PiSlideshowBold size={18} /> Dashboard
                </Link>
                <button onClick={logoutHandler} className="flex items-center gap-2 p-2 text-left hover:bg-gray-100 rounded-md transition cursor-pointer">
                  <LogOut size={18} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/profile" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition" onClick={() => setShowModal(false)}>
                  <User size={18} /> Profile
                </Link>
                <button onClick={logoutHandler} className="flex items-center gap-2 p-2 text-left hover:bg-gray-100 rounded-md transition cursor-pointer">
                  <LogOut size={18} /> Logout
                </button>
              </>
            )
          ) : (
            <>
              <Link to="/login" className="flex items-center gap-2 p-2 bg-green-500 text-white rounded-md transition hover:bg-green-600" onClick={() => setShowModal(false)}>
                <FaSignInAlt className="text-lg" /> Login
              </Link>
              <Link to="/register" className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded-md transition hover:bg-blue-600" onClick={() => setShowModal(false)}>
                <FaUserPlus className="text-lg" /> Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;