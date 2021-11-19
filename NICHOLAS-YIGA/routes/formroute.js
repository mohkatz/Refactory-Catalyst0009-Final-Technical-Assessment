const express = require("express");
const Person = require("../models/formmodel")
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        var images = file.fieldname;
        console.log(images);
        cb(null, file.fieldname + '-' + Date.now());
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});


router.get("/form",(req,res)=>{
    res.render("form")
})

router.post("/form",upload.single('icon'), async (req,res)=>{
    console.log(req.body);
    try {
         const person =new Person(req.body) 
         person.icon = req.file.path
       await person.save((err)=>{
            if(err ){
                throw err 
            }
            res.redirect("/form")
        })


    } catch (error) {
        console.log(error);
        res.status(400).send("Data was not sent to db")
    }
   
});

module.exports= router