var express = require('express');
//I would like to allocate the express package into 
// a variable
var app = express();
app.get( '/',function (request, response) {
    response.send("Hello World");
});
//Create a Server
var server = app.listen(8080, function() {
    //Server shpuld contain port and address http://localhost:3000
    var host = server.address().address;
    var port = server.address().port;
    console.log("My server is listening at http:// %s:%s ", host,port)
});
console.log("This is going appear in the terminal");

//Without using express module

var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end("This is another approach ");
    response.write(request.url);
}).listen(4000);
console.log("Server is listening at 4000 port")









