import axios from "axios";
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { USER_API_END_POINT } from "../Utils/constant";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../Redux/authSlice";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";

const LoginPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: name === "role" ? value.toLowerCase() : value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/home");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login to <span className="text-[#FE4F2D] font-bold">EducatorBD</span>
        </h2>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={input.email}
              onChange={changeEventHandler}
              className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={changeEventHandler}
              className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-gray-300">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="accent-blue-600"
              />
              <span className="text-gray-700 font-medium">Student</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="instructor"
                checked={input.role === "instructor"}
                onChange={changeEventHandler}
                className="accent-blue-600"
              />
              <span className="text-gray-700 font-medium">Instructor</span>
            </label>
          </div>

          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait..
            </Button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Login
            </button>
          )}
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?
          <Link to="/register" className="text-blue-600 hover:underline">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
