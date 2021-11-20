const express = require("express");
const path =  require("path");
const mongoose = require('mongoose');

const app = express();
const port = 7000;

//connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/assesement",(error)=>{
    if(!error){
        console.log('Success');
    }
    else{  
        console.log("Error connecting to database");
    }
})

//importing route
const formRoute = require("./routes/formroute");

//Middleware
app.use(express.urlencoded({ extended: true }));

//configurations or settings
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.use('/',formRoute)


app.get('*', (req, res) => {
    res.status(404).send('Page does not exist');
    
});

// module.exports = router;


app.listen(port, ()=>{
    console.log("We are running on port 5000");
})