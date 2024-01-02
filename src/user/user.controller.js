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



module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      console.log('Email is not found');
      return res.status(404).json({ message: 'Email not found' });
    }
    if (user.password !== req.body.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    res.status(200).json({ message: 'Login successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};






