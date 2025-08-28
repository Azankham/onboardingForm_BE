const express = require('express');
const property = require('../models/property');
const router = express.Router();

// Render Property Info Form
router.get('/propertyInfoForm', (req, res) => {
  res.render('propertyinfoForm');
});

// Submit property info data
router.post('/submitPropertyInfo', async (req, res) => {
  const { userId, propertyType, estimatedValue, mortgageBalance } = req.body;
  try {
    const newProperty = new property({ userId, propertyType, estimatedValue, mortgageBalance });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ message: 'Error creating property', error: err });
  }
});

module.exports = router;
