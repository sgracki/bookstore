var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    reputation: Number,
    createdAt: Date,
    updatedAt: Date,
    alive: {type: Boolean, default: true}
})

authorSchema.pre('save', (next) => {
    if(!this.createdAt) {
        this.createdAt = new Date();
    }
    this.updatedAt = new Date();

    next();
})

var Author = mongoose.model('Author', authorSchema);

module.exports = Author;