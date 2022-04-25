require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");


const key = process.env.JWT_SECRET_KEY || "full_stack_dev";
const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    console.log(user,req.body.email)
    if (user) {
      return res.status(400).send({ message: "please try another email" });
    }
    user = await User.create(req.body);
    const token = newToken(user);
    return res.status(200).send({ user, token });
  } catch (er) {
    res.status(500).send(er.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .send({ message: "Please enter the correct credentials" });
    }
    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res
        .status(400)
        .send({ message: "Please enter the correct credentials" });
    }

    const token = newToken(user);

    return res.status(200).send({ "user":user });
  } catch (er) {
    res.status(500).send(er.message);
  }
};

module.exports = { register, login };