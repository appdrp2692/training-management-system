const Course =
require("../models/Course");

const createCourse =
(data) => {
  return Course.create(data);
};

const getCourses =
() => {

  return Course.find()
  .populate(
    "trainer",
    "name email"
  );
};

module.exports = {
  createCourse,
  getCourses
};