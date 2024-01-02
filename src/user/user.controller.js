const User = require("../user/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

module.exports.addUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already in use
    const emailValid = await User.findOne({ email });

    if (emailValid) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const user = new User({ name, email, password: hashedPassword });

    // Save the user to the database
    const newUser = await user.save();

    res.json({ message: 'User added successfully', newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};




module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      console.log('Email is not found');
      return res.status(404).json({ message: 'Email not found' });
    }

    // Compare the hashed password using bcrypt
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
// If the password is valid, create a JWT token
const token = jwt.sign({ id: user._id }, "C7766321BB4EBB18", { expiresIn: "1h" });

// Set the JWT token as an HTTP-only cookie
res.cookie("jwt", token, { httpOnly: true });
    res.status(200).json({ message: 'Login successfully' , token});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};






