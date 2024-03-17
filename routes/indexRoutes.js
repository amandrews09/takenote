// Importing the Express framework module for building web applications
const express = require('express');

// Creating a new router instance from the Express framework
const router = express.Router();

// Importing the built-in path module to handle file paths
const path = require('path');

// Defining a route for handling GET requests to the root URL ('/')
router.get('/', (req, res) => {
    // Sending the index.html file located in the public directory as the response
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exporting the router module to be used in other parts of the application
module.exports = router;
