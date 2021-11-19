const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
  surname: String,
  giveName: String,
  dateOfBirth: String,
  residence: String,
  title: String,
  studentImage: String,
  nationality: String,
  gender: String,
  country: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", studentSchema);
