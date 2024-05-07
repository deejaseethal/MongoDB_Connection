const { teacherModel } = require("./teacherModel");

const createTeacher = async (req, res) => {
  try {
    console.log("hii");
    const { teacherId, name, age, subject, salary, gender, joiningDate } =
      req.body;
    if (!teacherId || !name || !age || !subject || !salary || !gender) {
      return res.staus(404).json({ message: "All fields Required" });
    }
    console.log("hii2");
    const isTeacherExist = await teacherModel.findOne({ teacherId });
    if (isTeacherExist) {
      return res
        .status(404)
        .json({ message: `Teacher with ${teacherId} already exist` });
    }
    console.log(isTeacherExist, "isTeacherExist");
    console.log(joiningDate);
    const newTeacher = new teacherModel({
      teacherId,
      name,
      age,
      subject,
      salary,
      gender,
      joiningDate,
    });
    await newTeacher.save();
    return res
      .status(200)
      .json({ message: "New Teacher Added", data: newTeacher });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await teacherModel.find();
    if (allTeachers.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    return res
      .status(200)
      .json({ message: "All Data found", data: allTeachers });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOneTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "Id Required" });
    }

    const teacher = await teacherModel.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: `No Teacher with Id ${id}` });
    }
    return res
      .status(200)
      .json({ message: `Found Teacher with id ${id} `, Data: teacher });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const filterByGender = async (req, res) => {
  try {
    const { gender } = req.query;
    if (!gender) {
      return res.status(404).json({ message: "Gender Required" });
    }
    const genderCategory = await teacherModel.find({ gender: gender });
    console.log(genderCategory, "genderCategory");
    if (!genderCategory) {
      return res
        .status(404)
        .json({ message: `No Data under Gender ${gender}` });
    }
    return res
      .status(200)
      .json({ message: "Data found", Data: genderCategory });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
module.exports = {
  getAllTeachers,
  getOneTeacher,
  createTeacher,
  filterByGender,
};
