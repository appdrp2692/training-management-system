const Enrollment =
require("../models/Enrollment");

const enrollmentStats =
async () => {

 return Enrollment.aggregate([

  {
   $group:{
    _id:"$course",

    totalStudents:{
      $sum:1
    }
   }
  }
 ]);
};

module.exports = {
 enrollmentStats
};