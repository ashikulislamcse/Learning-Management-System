import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../Redux/authSlice";
import axios from 'axios';

const RegisterForm = ({ toggleForm }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: name === "role" ? value.toLowerCase() : value,
    });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
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
    <div className="max-w-sm mx-auto p-6 bg-blue-100 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Create Your Account
        <br />
        <strong className="text-bold">
          <span className="text-[#FE4F2D]">Educator</span>BD
        </strong>
      </h2>
      <form onSubmit={onSubmitHandler} className="space-y-4">
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={input.name}
            onChange={changeEventHandler}
            className="w-full pl-10 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={input.email}
            onChange={changeEventHandler}
            className="w-full pl-10 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
            className="w-full pl-10 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Role Selection */}
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

        {/* Image Upload Field */}
        <div className="flex items-center gap-2">
          <Label>Profile</Label>
          <Input
            accept="image/*"
            type="file"
            onChange={changeFileHandler}
            className="cursor-pointer"
          />
        </div>
        <button className="w-full bg-blue-600 text-white p-1 rounded-lg font-medium hover:bg-blue-700 transition duration-300 cursor-pointer">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?
        <span
          className="text-blue-500 cursor-pointer font-medium"
          onClick={toggleForm}
        >
          {" "}
          Log in
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
