const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  ssn: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  citizenship: { type: String, required: true },
  employmentStatus: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);