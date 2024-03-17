// Importing the Express framework module for building web applications
const express = require('express');

// Creating a new router instance from the Express framework
const router = express.Router();

// Importing the built-in path module to handle file paths
const path = require('path');

// Importing the built-in file system module to perform file-related operations
const fs = require('fs');

// Route handler for GET requests to '/notes' endpoint
router.get('/notes', (req, res) => {
    // Sending the notes.html file located in the public directory as the response
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

// Route handler for GET requests to the root URL ('/') endpoint
router.get('/', (req, res) => {
    // Sending the notes.html file located in the public directory as the response
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

// Route handler for GET requests to '/api/notes' endpoint
router.get('/api/notes', (req, res) => {
    // Reading the JSON data from the db.json file
    const jsonData = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'));
    // Parsing the JSON data into JavaScript object
    const notes = JSON.parse(jsonData);
    // Sending the notes as a JSON response
    res.json(notes);
});

// Route handler for POST requests to '/api/notes' endpoint
router.post('/api/notes', (req, res) => {
    // Extracting title and text from the request body
    const { title, text } = req.body;

    // Creating a new note object with title, text, and a random id
    const newNote = {
        title,
        text,
        id: Math.floor(Math.random() * 10000),
    }

    // Reading the existing JSON data from the db.json file
    const jsonData = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'), 'utf8');

    // Parsing the existing JSON data into JavaScript object
    const notes = JSON.parse(jsonData);

    // Adding the new note to the existing notes array
    notes.push(newNote);

    // Writing the updated notes array back to the db.json file
    fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes));

    // Sending the newly added note as a JSON response
    res.json(newNote);
});
