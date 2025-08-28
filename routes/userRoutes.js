const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const user = require("../models/user");
const router = express.Router();

// Render Personal Info Form

router.get("/personalInfoForm", (req, res) => {
  res.render("index");
});

// Submit personal info data
router.post("/submitPersonalInfo", async (req, res) => {
  const {
    name,
    address,
    dob,
    ssn,
    maritalStatus,
    citizenship,
    employmentStatus,
  } = req.body;

  try {
    const newUser = new user(req.body);
    await newUser.save();

    const payload = {
      user: {
        id: newUser._id,
      },
    };

    jwt.sign(
      payload,
      "shhhhhh", // Replace with your secret key
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token, user: newUser });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error creating user", error: err });
  }
});

module.exports = router;
