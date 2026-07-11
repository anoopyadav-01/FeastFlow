import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//login
export const loginUser = async (req, res) => {
  console.log("Login request received:", req.body);

  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    console.log(" Found user:", user ? user.email : "No user found");

    if (!user) {
      return res.json({ success: false, message: "User not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credential" });
    }

    const token = createToken(user._id);
    console.log(" Token generated:", token);

    res.json({ success: true, token });
  } catch (error) {
    console.error(" Error in loginUser:", error);
    res.json({ success: false, message: "Error" });
  }
};

export const registerUser = async (req, res) => {
  console.log(" Register request received:", req.body);

  const { name, password, email } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    console.log(" Existing user check:", exists ? "Found" : "Not found");

    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      console.log(" Invalid email format:", email);
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      console.log(" Weak password entered");
      return res.json({
        success: false,
        message: "Please enter a strong password (min 8 chars)",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Password hashed successfully");

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    console.log("User registered successfully:", user.email);

    const token = createToken(user._id);
    console.log(" Token generated for new user");

    res.json({ success: true, token });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.json({ success: false, message: "Error" });
  }
};
