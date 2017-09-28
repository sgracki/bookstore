const express = require('express')
const app = express()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router()
var booksApi = require('./routes/api_books');
var authorsApi = require('./routes/api_authors');
var Log = require('log'),
    log = new Log('info');

// es6

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/books', booksApi)
app.use('/authors', authorsApi)

mongoose.connect('mongodb://localhost:27017/bookstore');
mongoose.connection.on('error', function () {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

// GET, POST, PUT, DELETE

app.listen(4000, () => {
    console.log('BookApi listening on port 4000!')
})