const express = require("express");
const multer = require("multer");
const path = require("path");
const auth = require("../middleware/auth");
const router = express.Router();
const Documents = require("../models/document");

// Set up storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const uploadMultiple = upload.fields([
  { name: "photoID", maxCount: 10 },
  { name: "mortgageStatement", maxCount: 10 },
  { name: "insurancePolicy", maxCount: 10 },
  { name: "floodPolicy", maxCount: 10 },
  { name: "paystubsW2s", maxCount: 10 },
  { name: "taxReturns", maxCount: 10 },
  { name: "profitLoss", maxCount: 10 },
  { name: "voidedCheck", maxCount: 10 },
]);

// Render the EJS form
router.get("/uploadForm",(req, res) => {
  res.render("uploadForm");
});

// POST route to upload documents

router.post("/uploadDocument",auth ,uploadMultiple, async (req, res) => {
  try {
    const userId = req.user.id;
    // Extract userId from req.body

    // Your document upload logic here
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded" });
    }
    // Use the provided documentData structure
    const uploadedFiles = req.files;

    const documentData = {
      photoID: uploadedFiles.photoID
        ? uploadedFiles.photoID.map((file) =>
            path.join("public/images/uploads", file.filename)
          )
        : [],
      mortgageStatement: uploadedFiles.mortgageStatement
        ? uploadedFiles.mortgageStatement.map((file) =>
            path.join("public/images/uploads", file.filename)
          )
        : [],
      insurancePolicy: uploadedFiles.insurancePolicy
        ? uploadedFiles.insurancePolicy.map((file) =>
            path.join("public/images/uploads", file.filename)
          )
        : [],
      floodPolicy: uploadedFiles.floodPolicy
        ? uploadedFiles.floodPolicy.map((file) =>
            path.join("public/images/uploads", file.filename)
          )
        : [],
      paystubsW2s: uploadedFiles.paystubsW2s
        ? uploadedFiles.paystubsW2s.map((file) =>
            path.join("public/images/uploads", file.filename)
          )
        : [],
      taxReturns: uploadedFiles.taxReturns
        ? uploadedFiles.taxReturns.map((file) =>
            path.join("public/images/uploads", file.filename)
          )
        : [],
      profitLoss: uploadedFiles.profitLoss
        ? uploadedFiles.profitLoss.map((file) =>
            path.join("public/images/uploads", file.filename)
          )
        : [],
      voidedCheck: uploadedFiles.voidedCheck
        ? uploadedFiles.voidedCheck.map((file) =>
            path.join("public/images/uploads", file.filename)
          )
        : [],
      userId, // Ensure this field is passed in the request body
    };

    // Create a new document using the documentData
    const newDocument = new Documents(documentData);

    // Save to MongoDB
    await newDocument.save();

    res.status(201).json({
      message: "Documents uploaded successfully",
      document: newDocument,
      userId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error uploading document", error: err });
  }
});

module.exports = router;
