//localhost  --> http
//path --> url
//local files --> fs
var http = require('http');
var url = require('url');
var fs = require('fs');
//Create a server --> http
http.createServer(function(request,response){
    //Check url 
    var query = url.parse(request.url, true);
    //check the files
    var filename = "." + query.pathname;
    //read file over server
    fs.readFile(filename, function(error,data){
        if(error){
            response.writeHead(404,{'Content-Type':'text/html'});
            return response.end("404 page not found");
        }
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        return response.end();
    });
}).listen(3000);
console.log("Server is started at listening to port 3000");