const { StudentModel } = require("../student/school.model");

const validateEmail = async (req, res, next) => {
  const { email, password } = req.body;

  const isUserExist = await StudentModel.findOne({ email });

  if (!isUserExist) {
    return res.status(400).json({ message: "Email not found" });
  }
  console.log(" => ", isUserExist);
  if (isUserExist.password !== password) {
    return res.status(400).json({ message: "Password do not match" });
  }
  req.user = isUserExist;
  next();
};

module.exports = { validateEmail };
