require('dotenv').config();

// Create an instance of Express.js
const express = require('express');

// Use Express EJS Layouts for templating
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');

// Connect to DB
connectDB();

// Create an instance of the Express app
const app = express();

// Set the port number for the app to listen on 
// Defaults to 5000, but can be overridden by the PORT environment variable
const PORT = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve static files from the 'public' directory
app.use(express.static('public'));

// Templating Engine
/**
 * Configure Express EJS Layouts
 * Set the layout file to './layouts/main'
 * Set the view engine to EJS
 */
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require("./server/routes/main"));

app.get('', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});