//Require Express, Mongoose and Cors
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Enviorement variables on dotenv file
require('dotenv').config();

//Create express server and added port
const app = express();
const port = process.env.PORT || 5000;

//cors and being able to parse json
app.use(cors());
app.use(express.json());;

//connect to mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://DanielMal:Petunia123@cluster0.dntmts1.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//require routes and have app usethem
const chatsRouter = require('./routes/chats');
// const usersRouter = require('./routes/users')

app.use('/chats', chatsRouter);
// app.use('/users', usersRouter);

//Listening to server
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});