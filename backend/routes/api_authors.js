const express = require('express')
var router = express.Router()
const Book = require('../models/Book');
const Author = require('../models/Author');

router.get('/', (req, res) => {
    Author.find({}).exec(
        (err, authors) => {
            if(err) {
                return res.sendStatus(404);
            }

            res.send(authors).status(200);
        }
    )
})

var validateForm = (fields, form) => {
    for(var i = 0; i < fields.length; i++) {
        if(!form[fields[i]] || form[fields[i]].length <= 0) {
            return false;
        }
    }
    return true
}

router.post('/', (req, res) => {
    const requiredFields = ['name','surname'];
    
    var author = new Author({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age ? parseInt(req.body.age) : 0,
        createdAt: new Date(),
        alive: req.body.alive
    })

    if(!validateForm(requiredFields, req.body)) {
        return res.sendStatus(300);
    } else {
        author.save(
            (err) => {
                if(!err) {
                    return res.send(author).status(200);
                }
            }
        )
    }
})

module.exports = router
