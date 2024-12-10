const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // For secure password hashing (optional)

// Assuming a User model (replace with your actual model)
const User = require('../models/user'); // Adjust the path as needed

// Create user route (with error handling and security considerations)
router.post('/users', async (req, res) => {
  try {
    // Validate user data (replace with your validation logic)
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send('Missing required fields: username, email, password');
    }

    // Check for existing user (optional)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send('Email already in use');
    }

    // Hash password (highly recommended for security)
    const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // Send success response (consider including minimal user data)
    res.status(201).send({ message: 'User created successfully' });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).send('Internal server error');
  }
});

module.exports = router;