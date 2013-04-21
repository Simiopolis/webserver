var express = require('express');
var http = require ('http');
var app = express();
var server = http.createServer(app);

// Sets up the routes in the app
require('./routes')(app);

// Start server
server.listen(8000);
console.log('Listening on port 8000');