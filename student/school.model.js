const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = Schema({
  studentId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
  gender: {
    enum: ["Male", "Female", "Other"],
    type: String,
  },
  sem: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  major: {
    enum: [
      "business administration",
      "computer science",
      "psychology",
      "accounting",
      "music",
      "engineering",
      "mathematics",
    ],
    type: String,
  },

  joiningDate: {
    type: Date,
    default: Date.now,
  },
});

const StudentModel = mongoose.model("student", studentSchema);
module.exports = { StudentModel };
