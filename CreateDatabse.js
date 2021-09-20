var MongoClient = require('mongodb').MongoClient;
//Creating a database named employee
var url = "mongodb://localhost:27017/empdatabase";

//dbconnection
MongoClient.connect(url, function(error, db){
    //error check - whether the connection establish
    if(error)throw error;
    console.log("DatabaseCreated");
    db.close();
});