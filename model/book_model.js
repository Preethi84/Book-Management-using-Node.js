const mongoose = require('mongoose');
const db = require('../config/db');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        default:"____",
    },
    isbn:{
        type:Number,
    },
    author:{
        type:String,
        default:"____"
    }
});

const bookmodel = db.model('books', bookSchema);

module.exports = bookmodel;