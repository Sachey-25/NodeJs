const myinfo = require("./Example");
console.log("My name is Sachin",myinfo);
//FileSysytem
var fs = require('fs');
//Asynchronous read --> callback <--- a function calls another fn
fs.readFile('./Example.js', function(error, info){
    if(error){ 
        return console.log (error);
    }
    console.log("Asynchronous read: " , info.toString());
});

//Synchronous reas
var info = fs.readFileSync('./Example.js');
console.log("Synchronus read : " , info.toString());
//Display something here
console.log("Program ended");
console.log(exports, require, module,__filename, __dirname);