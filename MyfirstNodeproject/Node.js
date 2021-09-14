var http = require('http');
var fileSystem = require('fs');
//create a server
http.createServer(function(req, res) {
    //open a file on the server and return its content:
    fileSystem.readFile('demo.html', function(err, data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
    fileSystem.appendFile('demo.html','Hello NOde.js',
    function(error){
        if(error) throw error;
        console.log("Data Sent to the file");
    });
}).listen(3000);
console.log("Server Started and its listen to port : 3000");
