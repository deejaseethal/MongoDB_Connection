const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/school_Management_System");
  console.log("Database Connected Successfully");
};

module.exports = { connectDB };
