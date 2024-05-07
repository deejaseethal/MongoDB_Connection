const { StudentModel } = require("./school.model");

const createNewStudent = async (req, res) => {
  try {
    console.log("Hii");
    const {
      studentId,
      name,
      email,
      password,
      age,
      joiningDate,
      gender,
      phoneNumber,
      major,
      sem,
    } = req.body;
    if (
      !studentId ||
      !name ||
      !email ||
      !password ||
      !age ||
      !gender ||
      !phoneNumber ||
      !major ||
      !sem
    ) {
      return res.status(400).send("All fields required");
    }

    const isEmailAlreadyExist = await StudentModel.findOne({ email });

    const isStudenIdExist = await StudentModel.findOne({ studentId });

    if (isEmailAlreadyExist) {
      return res.status(400).json({ message: "Email Already Exist" });
    }

    if (isStudenIdExist) {
      return res.status(400).json({ message: "Student Id already exist" });
    }
    const newStudent = new StudentModel({
      studentId,
      name,
      age,
      joiningDate,
      email,
      password,
      gender,
      phoneNumber,
      major,
      sem,
    });
    await newStudent.save();
    return res
      .status(200)
      .json({ message: "New Student Created", data: newStudent });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await StudentModel.find();
    if (allStudents.length === 0) {
      return res.status(400).json({ message: "No Students Found" });
    }
    return res
      .status(200)
      .json({ message: "All data found", Data: allStudents });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOneStudent = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    if (!id) {
      return res.status(400).json({ message: "Id Required" });
    }

    const student = await StudentModel.findById(id);
    console.log(student);
    if (!student) {
      return res.status(400).json({ message: `No student with id ${id}` });
    }
    return res.status(200).json({ message: "Student Found", Data: student });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const studentLogin = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Login Successful", data: req.user });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
};

const filterByGender = async (req, res) => {
  try {
    const { gender } = req.query;
    if (!gender) {
      return res.status(404).json({ message: "Gender required" });
    }

    console.log("gender", gender);
    // const allStudents = await StudentModel.find();

    // let afterFilter = allStudents.filter((student) => {
    //   return student.gender.toLowerCase() == gender;
    // });

    // console.log(afterFilter);
    const genderCategory = await StudentModel.find({ gender: gender });
    console.log(genderCategory);
    if (!genderCategory) {
      //if (afterFilter.length === 0) {
      return res
        .status(404)
        .json({ message: `No Student found under ${gender} category` });
    }
    return res.status(200).json({ message: "Student", data: genderCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNewStudent,
  getAllStudents,
  getOneStudent,
  studentLogin,
  filterByGender,
};
