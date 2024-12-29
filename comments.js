// Create web server
// Create a new web server using Express.js and bind it to a port.
var express = require('express');
var app = express();
app.listen(3000, function() {
    console.log('Server running on http://localhost:3000');
});