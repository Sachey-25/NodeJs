//Import the dependencies
const express = require ('express');
const mongoose = require('mongoose');
//creating the router
var router = express.Router();
//link
const COurse = mongoose.model('Course');
//Router controller for READ request
router.get('/', (req, res) => {
    res.render('course/courseAddEdit', {
        viewTitle:"Insert a new course for learning"
        });
});

//Route Controller for Update Request
router.post('/', (req, res) => {
    if(req.body._id == '')
    insertIntoMongoDB(req, res);
    else
    updateIntoMongoDB(req, res);
});

//Craeting a function to insert data into MOngoDB
function insertIntoMongoDB(req, res){
    var course = new Course();
    course.courseName = req.body.courseName;
    course.courseId = req.body.courseId;
    course.courseDuration = req.body.courseDuration;
    course.courseFee = req.body.courseFee;
    course.save((err, doc) => {
        if(!err)
        res.redirect('course/list');
        else
        console.log("Error during record insertion: " , err);
    });
}
//Creating a function to update data in MOngoDb
function updateIntoMongoDB(req, res){
    course.findoneUpdate({_id:req.body._id}, req.body, {new:true},(err,doc) =>{
        if(!err) {res.redirect ('/course/list');}
        else{
            if(err.name == 'ValidationError'){
                handleValidationError(err,req.body);
                res.render("xcourse/courseAddEdit", {
                    viewTitle: 'Update Course Deatils', employee:req.body
                });
            }
            else
                    console.log("Error during updating the record" , err);
        }
        
    });
}

//Router to retrieve the complete list of available courses
router.get('/list', (req,res) => {
    Course.find((err, docs) => {
    if(!err){
    res.render("course/list", {
    list: docs
    });
    }
    else {
    console.log('Failed to retrieve the Course List: '+ err);
    }
    });
    });
     
    //Creating a function to implement input validations
    function handleValidationError(err, body) {
    for (field in err.errors) {
    switch (err.errors[field].path) {
    case 'courseName':
    body['courseNameError'] = err.errors[field].message;
    break;
    default:
    break;
    }
    }
    }
     
    //Router to update a course using it's ID
    router.get('/:id', (req, res) => {
    Course.findById(req.params.id, (err, doc) => {
    if (!err) {
    res.render("course/courseAddEdit", {
    viewTitle: "Update Course Details",
    course: doc
    });
    }
    });
    });
     
    //Router Controller for DELETE request
    router.get('/delete/:id', (req, res) => {
    Course.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
    res.redirect('/course/list');
    }
    else { console.log('Failed to Delete Course Details: ' + err); }
    });
    });
     
    module.exports = router;

