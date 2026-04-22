const UserModel = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

async function Signup(req, res) {
  try {
    const { email, password, username, createdAt } = req.body;
    console.log("SIGNUP PASSWORD RECEIVED:", password); // 🔥 ADD THIS

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

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

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
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await UserModel.findOne({ email });
    console.log("USER EMAIL:", user?.email);
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
     // 🔥 DEBUG START
    console.log("INPUT PASSWORD:", password);
    console.log("DB PASSWORD:", user.password);

    const testHash = await bcrypt.hash(password, 12);
    console.log("TEST HASH:", testHash);

    const testCompare = await bcrypt.compare(password, testHash);
    console.log("SELF MATCH:", testCompare);
    // 🔥 DEBUG END

    const auth = await bcrypt.compare(password,user.password)

    console.log("MATCH RESULT:", auth);
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
     });

     res.status(201).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { Signup, Login };