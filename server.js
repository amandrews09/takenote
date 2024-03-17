// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    // Send the index.html file when the root URL is accessed
    res.sendFile(path.join(__dirname, 'develop/public'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});