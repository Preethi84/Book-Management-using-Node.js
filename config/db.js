const mongoose = require('mongoose');
let url = 'mongodb://localhost/booksDB';

const connection = mongoose.createConnection(url);
module.exports = connection;

