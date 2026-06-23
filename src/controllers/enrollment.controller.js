const service =
require(
"../services/enrollment.service"
);

const {
 successResponse
}
=
require("../utils/response");

exports.enroll =
async(req,res)=>{

 const data =
 await service.enrollStudent(
   req.body
 );

 successResponse(
   res,
   "Enrolled",
   data
 );
};

exports.getEnrollments =
async(req,res)=>{

 const data =
 await service.getEnrollments();

 successResponse(
   res,
   "Enrollments",
   data
 );
};