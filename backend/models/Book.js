var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    amount: Number,
    borrowedAmount: {type:Number, default: 0},
    imgUrl: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
    createdAt: Date,
    updatedAt: Date
})

bookSchema.pre('save', (next) => {
    if(!this.createdAt) {
        this.createdAt = new Date();
    }
    this.updatedAt = new Date();

    next();
})

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;