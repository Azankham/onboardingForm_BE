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
});

module.exports = mongoose.model("Documents", documentSchema);
