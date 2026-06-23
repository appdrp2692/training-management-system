const Enrollment =
require("../models/Enrollment");

const enrollStudent =
(data) => {

 return Enrollment.create(data);
};

const getEnrollments =
() => {

 return Enrollment.find()
 .populate(
   "student",
   "name email"
 )
 .populate(
   "course",
   "title"
 );
};

module.exports = {
 enrollStudent,
 getEnrollments
};