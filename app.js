require('./models/mongodb')

//Import the nesccessary packeages
const express = require('express');

var app = express();

const path = require('path');
const bodyparser = require('body-parser'); //http message -- convert -- html plain/text
const exphb = require('express-handlebars'); //middle --> get, post, put , delete

const courseController = require('./controllers/courseController'); //insert, update, post
app.use(bodyparser.urlencoded({
    extended:true
}));
//create a welcome message and direct them to the mainpage
app.get('/', (req, res) => {
    res.send('<h2 style = "font-family : malgun Gothic ; color : midnightblue">Welcome to home page node.js Mongodb course!! </h2> Click here to go to <b><a href="/course"> CoursePage </a> </b>');

});
app.use(bodyparser.json());

//configure the express middleware for the handlears
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb({extname : 'hbs', defaultLayout: 'mainLayout', layoutDir:__dirname + '/layouts/mainLayout'}));
app.set('view engine', 'hbs');

//Establish the server connection
//PORT ENVIRONMENT VARIBALE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to server on port ${port}....`));

//set the controller path which willl be responsing the user actions
app.use('/course', courseController);