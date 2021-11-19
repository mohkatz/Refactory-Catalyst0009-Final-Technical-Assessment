//Start app Imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT 

//for the app middlewares
app.use(cors()); //
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); //
app.use(express.static('pictures')); // student pics
//connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
});

app.use('/api/', require('./routes/routes'));
//load server
app.listen(port, function(){
    console.log(`Server is connected`);
})
