const { validateEmail } = require("../middlewares/validateEmail");
const {
  createNewStudent,
  getAllStudents,
  getOneStudent,
  studentLogin,
  filterByGender,
} = require("./studentController");
const studentRoutes = require("express").Router();

studentRoutes.post("/create", createNewStudent);
studentRoutes.get("/", getAllStudents);
studentRoutes.get("/getOneStudent/:id", getOneStudent);
studentRoutes.post("/login", validateEmail, studentLogin);
studentRoutes.get("/filterByGender", filterByGender);

module.exports = { studentRoutes };
