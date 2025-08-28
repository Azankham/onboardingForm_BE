const express = require("express");
const income = require("../models/income");
const auth = require("../middleware/auth");
const router = express.Router();

// Render Income Info Form
router.get("/incomeInfoForm", (req, res) => {
  res.render("incomeInfoForm");
});

// Submit income info data
router.post("/submitIncomeInfo", auth, async (req, res) => {
  try {
    const { incomeType, amount, frequency } = req.body;
    const userId = req.user.id;

    const newIncome = new income({
      userId,
      incomeType,
      amount,
      frequency
    });

    await newIncome.save();
    res.status(201).json(newIncome);
  } catch (err) {
    res.status(400).json({ message: "Error creating income", error: err });
  }
});

module.exports = router;
