// impoerted mongodb instance to my project
const MongoClient = require('mongodb').MongoClient;
//I will map to the mongodb connection path
var url = "mongodb://localhost:27017/EmployeeDb";
//establish the conection the mongodb instance
MongoClient.connect(url, function(error, information){
    if(error) throw err;
    console.log("Connection established to the mongodb");
    information.close();
});