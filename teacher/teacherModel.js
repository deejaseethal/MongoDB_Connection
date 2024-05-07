const mongoose = require("mongoose");
const { Schema } = mongoose;

const teacherSchema = Schema({
  teacherId: {
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
  subject: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
});

const teacherModel = mongoose.model("teacher", teacherSchema);
module.exports = { teacherModel };
