var MongoClient = require('mongodb').MongoClient;
//Creating a database named employee
var url = "mongodb://localhost:27017/";
//connections established --> db is present 
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("empdatabase");
    /*var dataobjects = [
        {name : 'Sachin', age :27 , company : 'wipro', city : 'Bangalore'},
        {name : 'Sourav', age :40 , company : 'BCCI', city : 'WestBengal'},
        {name : 'Rahul', age :38 , company : 'KCCI', city : 'Bangalore'},
        {name : 'Rohit', age :32 , company : 'ICC', city : 'Mumbai'},
        {name : 'Yuvraj', age :33 , company : 'Campions', city : 'Panjab'}
    ];*/
    dbo.collection("Employee").find({}).toArray(function(err, res){
        if(err)throw err;
        console.log("Data found successfully");
        console.log(res);
        db.close();
    });
});