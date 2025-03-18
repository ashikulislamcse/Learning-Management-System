import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import ConnectDB from "./Database/Database.js";
ConnectDB();
import userRoute from "./Routes/userRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

// All Api Routes Here
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 5001;
app.listen(PORT, (req, res) => {
  console.log(`Backend Server is Running on Port: ${PORT}`);
});
