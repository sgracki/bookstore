const express = require('express')
var router = express.Router()
const Book = require('../models/Book');
const Author = require('../models/Author');

router.get('/', (req, res) => {
    Book.find({})
        .populate('author')
        .exec(
            (err, books) => {
                if(err) {
                    res.sendStatus(404);
                }

                res.send(books).status(200);
            }
        )
})

router.get('/:id', (req, res) => {
    Book.findOne({_id: req.params.id})
        .populate('author')
        .exec(
            (err, book) => {
                if(err || !book) {
                    return res.sendStatus(404);
                }

                res.send(book).status(200);
            }
        )
})

router.post('/', (req, res) => {
    var book = new Book({
        title: req.body.title,
        description: req.body.description,
        imgUrl: req.body.imageUrl,
        // author: req.body.author,
        amount: req.body.amount ? parseInt(req.body.amount) : 0,
        createdAt: new Date()
    })

    book.save(
        (err) => {
            if(!err) {
                return res.send(book).status(200);
            }
        }
    )
})

router.put('/:id', (req, res) => {
    Book.findOne({_id: req.params.id}).exec(
        (err, book) => {
            if(err || !book) {
                return res.sendStatus(404);
            }

            book.borrowedAmount = req.body.borrowedAmount;

            book.save(
                (err) => {
                    if(!err) {
                        return res.send(book).status(200);
                    }
                }
            )
        }
    )
})

router.delete('/:id', (req, res) => {
    Book.findOneAndRemove({_id: req.params.id}).exec(
        (err) => {
            if(err) {
                return res.sendStatus(404)
            }

            res.sendStatus(200);
        }
    )
})

module.exports = router