import bcrypt from "bcryptjs";
import User from "../Models/user.model.js";
import generateTokenAndSetCookie from "../Utils/GenerateToken.js";


export const singup = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwrods do not match !!" });
    }

    const user = await User.findOne({ username });

    if (user) {
      
      return res.status(400).json({ error: "Username already exists !!" });
    }

    // HASH password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfiePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfiePic,
    });
    if (newUser) {
      // Generate JWT token here
      generateTokenAndSetCookie(newUser._id,res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    }
    else{
      res.status(400).json({error: "Invalid User Data !!"});
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Server Error !!" });
  }
};

export const login = async (req, res) => {
  try {
    console.log("loginUser");
    const {username,password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

    if(!user || !isPasswordCorrect){
      return res.status(400).json({error:"Invalid username or password !!"})
    }

    generateTokenAndSetCookie(user._id,res);
    res.status(200).json({
      _id:user._id,
      fullName:user.fullName,
      username:user.username,
      profilePic:user.profilePic
    })

  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Server Error !!" });
  }
};

export const logout = async (req, res) => {
  console.log("logoutUser");
  try {
    res.cookie("jwt","",{maxAge : 0});
    res.status(200).json({message:"Logged Out Successfully !"})
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Server Error !!" });
  }
};
