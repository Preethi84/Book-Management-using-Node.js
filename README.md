A Books Directory using Node.js, mongodb and express

Read ->   /books - Read all the books available in the database             (GET)
Read ->   /books/:id - read only a specific book                            (GET)
Create -> /books/:id - Create a new book and save it in the database        (POST)
Update -> /books/:id - update a book using the id                           (PUT)
Delete -> /books/:id - delete a book from the database using a id          (DELETE)

# db.js -> create a new mongoose connection and a new database named booksDB
# book_model.js -> use the mongoose connection from db.js, create a new schema and use the schema to create a new model
# api.js -> use the express to create the server and define all the routes here 