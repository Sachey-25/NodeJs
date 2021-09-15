const http = require('http');

//i would like to know what prt that im using
const port = process.env.PORT || 3000;
//create server
const server = http.createServer((request, response) =>{
    response.sytatus =200;
    response.setHeader('Content-Type','text/html');
    response.end('<h2>This is another way of configuring server</h2>');
})
server.listen((port, ()=>{
   console.log(`Server is listening on port ${port}`);
 }));
   