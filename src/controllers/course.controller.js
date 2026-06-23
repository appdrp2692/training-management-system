const courseService =
require("../services/course.service");

const {
 successResponse
}
=
require("../utils/response");

exports.createCourse =
async(req,res)=>{

 const course =
 await courseService.createCourse(
   req.body
 );

 successResponse(
   res,
   "Course Created",
   course,
   201
 );
};

exports.getCourses =
async(req,res)=>{

 const courses =
 await courseService.getCourses();

 successResponse(
   res,
   "Courses",
   courses
 );
};