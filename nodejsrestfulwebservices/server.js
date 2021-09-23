//express 
let express = require('express');
const { read } = require('fs');
//joi
//let joi = require('joi')//used for valiation purpose
//body-parser

//i would like to conect the webapplication
var app = express();
//I would like to use the web application into Json format
app.use(express.json());

//initialise the data
const books = [
    {id:1, title : 'Node.js programming', description: 'Node.js is server side programming', author:'Sachin Anil'},
    {id:2, title : 'React.js programming', description:'React.js is a library of JavaScript', author:'Arun Bhattarchrya'},
    {id:3, title: 'python programming', descripton:'Python programming is very popular these days', author : 'Narayan Murthy'},
]
//READ the Requests handlers ---> requestbody to the webapp : express
//why arrow functions --> avoid using call function name/keyword again and again 
//represention of arrow functions <--- function(res,req){} 
app.get('/', (request, response) => {
    response.send("Welcome to programming books library"); //home page path
} ); 

//http://localhpst:3000/api/books
app.get('/api/books', ( request,response)  =>{
    response.send(books);
});

//I woild like to search a book with its id 1,2,3 //checking this in existing data
app.get('/api/books/id', (request, response) =>{
    const book = books.find( result => result.id === parseInt(request.params.id));

    //if boot found founf my server shoudl respond back with id otherwise should give me an erro
    if(!book) response.status(404)
    .send('<h2 style = "font-family:Lucida san; color: red;">not found</h2>');        
        response.send(book);
});
app.get('/api/books/:id', (request, response) => {
    const book = books.find( result => result.id === parseInt(request.params.id));
    if(!book) response.status(404)
    .send('<h2 style = "font-family:Lucinda san ; color:red; "> Not found </h2>' );

    //how to check hr book for deletion
    const index = books.indexOf(book);
    books.splice(index,1);
    response.send(book);
    response.send("Book has been removed");
});
//For adding new elements to the server -> sending new request body to the server
app.post('/api/books', (request,response) => {
    const book ={
        id:books.length+1,
        title:request.body.title,
        description:request.body.descripton,
        author:request.body.author
    };
    books.push(book);
    response.send(book);
    response.send("Book added successfully");
});
//Updating the new value/data to the server
/*app.put('/api/books/:id', (request,response) => {
    const book = books.find(result => result.id === parseInt(request.body.params.id));
    book.title=request.body.title;
    response.send(book);

});*/



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening the port ${port}..`));


