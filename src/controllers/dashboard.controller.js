const dashboardService =
require(
"../services/dashboard.service"
);

const {
 successResponse
}
=
require("../utils/response");

exports.stats =
async(req,res)=>{

 const stats =
 await dashboardService
 .enrollmentStats();

 successResponse(
   res,
   "Dashboard Stats",
   stats
 );
};