const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  photoID: { type: [String], required: false }, // For multiple files, set to false if not mandatory
  mortgageStatement: { type: [String], required: false },
  insurancePolicy: { type: [String], required: false },
  floodPolicy: { type: [String], required: false },
  paystubsW2s: { type: [String], required: false },
  taxReturns: { type: [String], required: false },
  profitLoss: { type: [String], required: false },
  voidedCheck: { type: [String], required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" }, // Ensure userId is valid ObjectId
<<<<<<< HEAD
=======
  location: {
    type: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
      address: { type: String, required: true }
    },
    required: true
  },
>>>>>>> d8d1103331e05cc34b6c93f8548f244473142803
});

module.exports = mongoose.model("Documents", documentSchema);
