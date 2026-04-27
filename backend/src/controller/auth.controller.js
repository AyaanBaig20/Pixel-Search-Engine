import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


// Sigup Controller
async function Signup(req, res) {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    let hash = await bcrypt.hash(password, 10);

    let crruser = await userModel.create({
      name,
      email,
      password: hash,
    });

    let token = jwt.sign(
      { id: crruser._id, email },
      process.env.JWT_KEY
    );

    res.cookie("token", token);

    res.json({ message: "User created successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

async function Login(req, res) {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }

    let isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    let token = jwt.sign(
      { id: userExist._id, email },
      process.env.JWT_KEY
    );

    res.cookie("token", token);

    res.json({ message: "Login successful" });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

export default { Signup ,Login};
