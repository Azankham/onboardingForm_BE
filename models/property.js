const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  propertyType: { type: String, required: true },
  estimatedValue: { type: Number, required: true },
  mortgageBalance: { type: Number, required: true }
});

module.exports = mongoose.model('Property', propertySchema);
