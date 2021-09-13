//modules in node js
//NPM 
// localhost server --> http
var http = require('http'); // http module is imported 

//create a server --> callfunction <---- Node.js becomes async
http.createServer(function(request, response) {
    //send the http header  ----> 404, 200, 401, 500 --> 
    // http status : 200 --> connecton establised --> req, res
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});  
    //send the response body as "Hello my name is Server"
    response.end("Hello My name is Server");
}).listen(3000);
console.log("Server is Strated and listening to the port : 3000");