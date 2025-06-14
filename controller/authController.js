const User = require("../schema/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userPresent = await User.findOne({ email });
    if (userPresent)
      return res.status(400).json({ message: "user already exist" });

    const salt = await bcrypt.genSalt();
    const hashedPassowrd = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hashedPassowrd });
    res.status(201).json({
      message: "user created",
    });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) res.status(400).json({ message: "user not found!!!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.status(400).json({ message: "user not found!!!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token: token,
      message: "log in success",
      user: user,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const userData = await User.findById(req.user.id).select("-password");

    if (!userData) {
      return res.status(400).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user found", user: userData });
  } catch (err) {
    res.status(501).json({ message: "internal server error", error: err });
  }
};
