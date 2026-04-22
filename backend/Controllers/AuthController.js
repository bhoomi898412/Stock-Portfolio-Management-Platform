const UserModel = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
};

async function Signup(req, res) {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await UserModel.create({
      email,
      password,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
}

async function Login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
}

function Logout(req, res) {
  res.clearCookie("token", cookieOptions);
  res.status(200).json({ success: true, message: "User logged out successfully" });
}

module.exports = { Signup, Login, Logout };
