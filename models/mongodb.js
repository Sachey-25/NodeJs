const mongoose = require('mongoose');
mongoose.connect('mongdb://localhost:27017/EmployeeDB',{userNewUrlParse : true}, (err) => {
    if(!err){
        console.log("Successfully Established connection with MongoDb");
    }
    else{
        console.log("Failed to connet");
    }
});

require('./course.model');