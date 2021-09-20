var MongoClient = require('mongodb').MongoClient;
//Creating a database named employee
var url = "mongodb://localhost:27017/";

//connections established --> db is present 
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("empdatabase");
    //in order to send the data we need to talk to another object
    var collectionobject = {
        name :"Cognizant",
        city :"Banglore",
        address : "Bangalore, Karnataka"
    };
    //code to check whether data is inserted or no || we have a connection error
    dbo.collection("Employee").insertOne(collectionobject, function(err, res){
        if(err)throw err;
        console.log("1 document is inserted");
        db.close();
    });
});