const Student = require('../models/student');

const fs = require('fs');
//const routes = require('../routes/routes');

module.exports = class API {
  //api root
  static async apiHome(req, res) {
    res.send('Student registration API');
  }

  //Fetch all students
  static async fetchAllStudents(req, res) {
    try {
      const students = await Student.find();
      //status 200 means everything is working fine and student has been registered
      res.status(200).json(students);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Fetch student by ID
  static async fetchStudentByID(req, res) {
    const id = req.params.id;
    try {
      const student = await Student.findById(id);
      res.status(200).json(student);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Register a Student
  static async createStudent(req, res) {
    const student = req.body;
    const coverArtImage = req.file.filename;
    student.studentImage = coverArtImage;
    try {
      await Student.create(student);
      //status 201 means student has been registered
      res.status(201).json({ message: 'Student added successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  //Update a Student
  static async updateStudent(req, res) {
    const id = req.params.id;
    let newArtImage = '';
    if (req.file) {
      newArtImage = req.file.filename;
      try {
        fs.unlinkSync('./uploads/' + req.body.oldArtImage);
      } catch (err) {
        console.log(err);
      }
    } else {
      newArtImage = req.body.oldArtImage;
    }
    const newStudent = req.body;
    newStudent.studentImage = newArtImage;
    try {
      await Student.findByIdAndUpdate(id, newStudent);
      res.status(200).json({ message: 'Student updated successfully' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Delete a Student
  static async deleteStudent(req, res) {
    const id = req.params.id;

    try {
      const result = await Student.findByIdAndDelete(id);
      if (result.studentImage != '') {
        try {
          fs.unlinkSync('./uploads/' + result.studentImage);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
