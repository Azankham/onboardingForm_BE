require("dotenv").config(); // Ensure this is at the top
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
// const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Log the Mongo URI for debugging
// console.log("MONGO_URI:", process.env.MONGO_URI);

const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const documentRoutes = require("./routes/documentRoutes");

app.get("/", (req, res) => {
  res.send("Hey i am live");
});

app.use("/api/user", userRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/document", documentRoutes);

// Start Server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI); // Pass URI here

<<<<<<< HEAD
    const PORT = process.env.PORT || 5000;
=======
    const PORT = process.env.PORT || 2000;
>>>>>>> d8d1103331e05cc34b6c93f8548f244473142803
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Server startup error:", error.message);
  }
};

start();
