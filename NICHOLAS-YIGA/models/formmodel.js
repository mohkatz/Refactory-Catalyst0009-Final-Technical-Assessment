const { text } = require("body-parser");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true,
    },
    givenname: {
        type: String,
        required: true,
    },
  
    Title: {
        type: String,
        required: true,
    },
    icon:{
        type: String,
        required: true,
    },
    gender:{
        type: Bo,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    residence:{
        type: String,
        required: true,
    },
    nationality:{
        type: String,
        required: true,
    },
})

const formModel= mongoose.model('Form', UserSchema)
module.exports =  formModel;
