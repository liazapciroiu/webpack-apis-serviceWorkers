// Setup dotenv module to protect API KEY
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Setup server and dependencies
var path = require('path');
const express = require('express');
// Instance of app
const app = express();
app.use(express.static('dist'));
// NLP analysis API
var aylien = require('aylien_textapi');
//Use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Variable for calling the API
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// designates what port the app will listen to for incoming requests
const port = 7000;
app.listen(port, function () {
  console.log(`server running on localhost:${port}`);
});

// Routes
app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
});

// Handle POST
app.post('/analysis', function (req, res) {
  // call API with the post input
  textapi.sentiment({
    url: req.body.url
  }, function(error, response) {
    res.send(response)
    if (error) {
      console.log(error);
    }
  })
})
  
module.exports = app;
