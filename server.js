// Importing the express framework to create the server
const express = require('express');
const app = express(); // Creating an instance of the Express application
const path = require('path'); // Module for working with file and directory paths
const PORT = process.env.PORT || 3001 // Setting the port for the server

// Importing route modules
const notesRoutes = require('./routes/notesRoutes');
const indexRoutes = require('./routes/indexRoutes');

// Setting the path to the public directory
const publicPath = path.join(__dirname, 'public');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse incoming URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Serving static files from the public directory
app.use(express.static(publicPath));

// Assigning routes for the root path and the notes path
app.use('/', indexRoutes);
app.use('/', notesRoutes);

// Starting the server and listening for incoming requests
app.listen(PORT, () =>
    console.log(`Listening for requests on port ${PORT}!`)
);