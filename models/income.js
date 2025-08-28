const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  incomeType: { type: String, required: true },
  amount: { type: Number, required: true },
  frequency: { type: String, required: true }
});

module.exports = mongoose.model('Income', incomeSchema);
