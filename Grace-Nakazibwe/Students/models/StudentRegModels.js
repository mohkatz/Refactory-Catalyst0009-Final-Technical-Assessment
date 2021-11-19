/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');

// Project Schema.
const studentSchema = new mongoose.Schema({

});
module.exports = mongoose.model('StudentReg', studentSchema);
