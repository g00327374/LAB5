// don't need semicolons at the end of each line unless
// I want to seperate multiple statements on a single line
// where as each of these lines is a complete statement
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
// incoming HTTP requests and extracts data from it
// it is essential when handling data submitted through 
// forms or when receiving data from API requests
const bodyParser = require('body-parser');

// confugires the body-parser to handle URL form data from
// incoming HTTP requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// uses 'app' object which represents an instance of an
// application to define a route for handling HTTP GET requests
app.get('/name', (req, res) => {
    // req.query.fname is used to acces the value of a query
    // parameter named fname from incoming HTTP request
    // query parameters are part of the URL and are used to 
    // pass data to the server from the client
    console.log(req.query.fname);
    // res.send() is a method to send a response to an HTTP client
    res.send('Hello ' + req.query.fname + " " + req.query.lname);
})

// sends a post request to the path /name route
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + " " + req.body.lname);
})

app.get('/', (req, res) => {
    // method to listen to the url
    // execute request and response
    // print out hello world in port:3000
    res.send('Welcome to Data Representationn & Querying')
})

app.get('/whatever', (req, res) => {
    res.send("Goodbye");
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name)
    res.send("Hello " + req.params.name);
})

app.get('/api/books', (req, res) => {
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];

    res.status(200).json({
        myBooks: data
    })
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

// listen to a particular http request at a particular port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})