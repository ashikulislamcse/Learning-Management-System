import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userID: user._id }, process.env.jWT_SECRET_KEY, {
    expiresIn: "10d",
  });
  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, //1 Day
    }).json({
        success:true,
        message,
        user
    })
};
