const User = require("../user/user.model");

module.exports.adduser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const emailvalid = await User.findOne({ email });
    if (emailvalid) {
      return res.status(500).json({ message: "Email alrady use in" });
    }

    const user = new User({ name, email, password });
    const newuser = await user.save();
    res.json({ message: "user add secussflly", newuser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
