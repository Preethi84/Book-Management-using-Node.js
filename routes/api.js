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
    
})


router.post('/books', async function(req,res){
    
})

router.put('/books/:id', async function(req,res){

})

router.delete('/books/:id', async function(req, res){

});


module.exports = router;