const express = require('express');
const route = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

//connect to mongoose
mongoose.connect('mongodb://localhost/datascience1');
mongoose.Promise = global.Promise;

// static file
app.use(express.static('public'));

// body-parser
app.use(bodyParser.json());


// To use api before ninjas
app.use('/api', route);

//error handling middleware
app.use(function(err,req , res, next){
    // console.log(err);
    res.status(422).send({ error: err.message});
});

// listening to the port
const PORT = process.env.PORT || 5000;
app.listen( PORT , () => console.log(`server started on port ${PORT}`));