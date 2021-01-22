const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

// data science & model
const DataSchema = new Schema({
    name:{
        type: String,
        required: [true , 'Name field is required']
    },
    age:{
        type: Number,
        min: 0,
        max: 65
    },
    email:{
        type: String,
        lowercase: true
    },
    phonenumber:{
        type: Number,
        minlength: 10,
        maxlength: 10
    }

});

const Data = mongoose.model('data' , DataSchema);

module.exports = Data;