const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SEC_KEY = process.env.JWT_KEY;

const allUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Error no user find",
    });
  }
};

const newUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        status: "Please fill all the fields",
      });
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return res.status(404).json({
        status: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({
      status: "Success",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error sing up",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        status: "Please Write Requred fileds",
      });
    }

    const isUserExists = await User.findOne({ email });
    if (!isUserExists) {
      return res.status(404).json({
        status: "unauthorized",
      });
    }

    const isPassValid = await bcrypt.compare(password, isUserExists.password);
    if (!isPassValid) {
      return res.status(401).json({
        status: "Password Not Valid",
      });
    }
    const token = jwt.sign({ userID: isUserExists._id, email }, SEC_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login Success", token });
  } catch (error) {
    return res.status(500).json({
      error: "Error login",
    });
  }
};

module.exports = { allUser, newUser, loginUser };
