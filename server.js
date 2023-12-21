//Dependencies
require("dotenv").config();//this is how we make use of our .env variables
require("./config/db") // bring in our db config
const express= require("express");
const morgan= require("morgan") //logger
const app= express();
const {PORT=3013}= process.env;
//const PORT =process.env.PORT || 3013;

// Bring in our model
const Book = require("./models/Book")

/**
 * Middleware
 */
app.use(morgan("dev")) // logging
app.use(express.urlencoded({ extended: true })) // body parser this is how we get access to req.body

//Routes & Router

//INDEX- GET render all of the books

//NEW- GET

// Create - POST
app.post("/books", async (req, res) => {
    try {
        if (req.body.completed === "on") {
            // if checked
            req.body.completed = true
        } else {
            // if not checked
            req.body.completed = false
        }
    
        let newBook = await Book.create(req.body)
        res.send(newBook)
        
    } catch (err) {
        res.send(err)
    }
})

//SHOW- GET Rendering only one book.

//Server Listener

app.listen(PORT, () =>console.log(`Listening to the sounds of ${PORT}`));