var MongoClient = require('mongodb').MongoClient;
//Creating a database named employee
var url = "mongodb://localhost:27017/";
//dbconnection
MongoClient.connect(url, function(error, db){
    //error check - whether the connection establish
    if(error){
        console.log("Connection is not possible at this moment");
    }
    //Before create a (table) collection we need an object to connect 
    // with the database.
    var database_object = db.db("empdatabase"); //creating a space within db
    //create a collection (table) 
    database_object.createCollection("employess", function(error, response){
        if(error)throw error;
        console.log("Collection created within the employedb");
        db.close();
    });
    console.log("Connection establised");
    console.log("Collection created!");
    console.log("Collection createdin employeedb successfully");
  
});