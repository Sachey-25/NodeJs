var MongoClient = require('mongodb').MongoClient;
//Creating a database named employee
var url = "mongodb://localhost:27017/";
//connections established --> db is present 
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("empdatabase");    
    //How to find the data present in the data base
    dbo.collection("Employee").findOne( {}, function(err, result){
        if(err) throw err;
        console.log("Data found and yu see it below: ------------");
        console.log(result);
        db.close();
    });
});