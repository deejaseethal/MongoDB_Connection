const {
  getOneTeacher,
  getAllTeachers,
  createTeacher,
  filterByGender,
} = require("./teacherController");
const teacherRoutes = require("express").Router();

teacherRoutes.post("/createNewTeacher", createTeacher);
teacherRoutes.get("/getAllTeachers", getAllTeachers);
teacherRoutes.get("/getTeacher/:id", getOneTeacher);
teacherRoutes.get("/filterByGender", filterByGender);

module.exports = { teacherRoutes };
