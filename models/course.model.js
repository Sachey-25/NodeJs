// i would like tomgoahead create schema
const mongoose = require('mongoose');

//Attributes of the Course object
var courseSchema = new mongoose.Schema({
    courseName:{
        type: String,
        required : 'This feild is required!'
    },
    courseId:{
        type: String,
        
    },
    courseDuration:{
        type: String,
    },
    courseFee: {
        type:String,
    }
});
mongoose.model('Course', courseSchema);