const express = require('express');
const router = express.Router();
const API = require('../controllers/api');
const multer = require('multer');

//Multer middleware to handle student image file uploads
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './students');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      'student_' + file.fieldname + '_' + Date.now() + '_' + file.originalname
    );
  },
});

let upload = multer({
  storage: storage,
}).single('studentImage');

  
//API root
router.get('/', API.apiHome);

//Student routes
router.get('/students', API.fetchAllStudents);
router.get('/student/:id', API.fetchStudentByID);
router.post('/student/', upload, API.createStudent);
router.patch('/student/:id', upload, API.updateStudent);
router.delete('/student/:id', API.deleteStudent);


module.exports = router;
