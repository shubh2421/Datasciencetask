const express = require('express');
const router = express.Router();
const Data = require('../models/datascience');

// get a list of task from the db
router.get('/task', function(req, res,next){
    Data.find({}).then(function(data){
        res.send(data);
    });
});

// add a new list to task from the db
router.post('/task' , function(req,res,next){
    Data.create(req.body).then(function(data){ 
        res.send(data); 
    }).catch(next);  
});

// update a list in task from the db
router.put('/task/:id' , function(req, res,next){
    Data.findByIdAndUpdate({_id: req.params.id} , req.body).then(function(){
        Data.findOne({_id:req.params.id}).then(function(data){
            res.send(data);
        });
       
    });
});

// Delete a list in task from the db
router.delete('/task/:id' , function(req, res,next){
    Data.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    });
 
});

module.exports = router;