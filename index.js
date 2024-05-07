const express = require("express");
const { connectDB } = require("./connectDB");
const { studentRoutes } = require("./student/studentRoute");
const { teacherRoutes } = require("./teacher/teacherRoute");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
