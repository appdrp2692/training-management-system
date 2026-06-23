const mongoose = require("mongoose");

const assignmentSchema =
new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  description: String,

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  },

  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  marks: {
    type: Number,
    default: 0
  }
},
{
  timestamps: true
}
);

module.exports =
mongoose.model(
  "Assignment",
  assignmentSchema
);