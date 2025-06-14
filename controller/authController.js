const User = require("../schema/userSchema");
const bcrypt = require("bcryptjs");

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
