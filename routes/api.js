const express = require('express');
const router = express.Router();

const bookmodel = require('../model/book_model');

router.get('/books', async function(req,res){
    const bookList = await bookmodel.find();
    console.log(bookList);
    res.send(bookList);
});

router.get('/books/:id', async function(req,res){
    const {id} = req.params;
    const reqBook = await bookmodel.findOne({isbn:id});
    res.send(reqBook)
})


router.post('/books', async function(req,res){
    const title = req.body.title;
    const isbn = req.body.isbn;
    const author = req.body.author;
    console.log(author)
    const booksExist = await bookmodel.findOne({isbn:isbn});
    if (booksExist) return res.send('Book already exist');

    var data = await bookmodel.create({title:title, isbn:isbn, author:author});
    data.save();
    res.send("Book Uploaded");
})

router.put('/books/:id', async function(req,res){
    const {id} = req.params;
    const booksExist = await bookmodel.findOne({isbn:id});
    const {
        title,
        author
    } = req.body;
    if (!booksExist) return res.send('Book doesnt exist');

    const updateField = (val, prev) => !val ? prev : val;
    const updateBook = {
        ...booksExist,
        title: updateField(title, booksExist.title),
        author: updateField(author, booksExist.author)
    };

    await bookmodel.updateOne({isbn:id}, {$set : {title:updateBook.title, author:updateBook.author}}).then(function(){
        res.send(`book with id ${id} updated successfully`);
    }) 
})

router.delete('/books/:id', async function(req, res){
    const {id} = req.params;
    console.log({id});
    const booksExist = await bookmodel.findOne({isbn:id});
    if(!booksExist) return res.send("Not found");

    await bookmodel.deleteOne({isbn:id}).then(function(){
        res.send(`book with id ${id} deleted successfully`);
    }).catch(function(error){
        console.error(error);
    });
});


module.exports = router;