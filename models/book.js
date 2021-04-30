var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({ 
    title: { type: String, unique: true},
    author: String,
    gender: String,
    desc: String,
    year: Number,
    price: Number 
},
    { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);