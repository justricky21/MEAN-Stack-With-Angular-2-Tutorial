/* ===================
   Import Node Modules
==================== */

const express = require('express'); //Fast, unopinionated, minimalist web framework for node
const app = express(); //Initiate Express Application
const mongoose = require('mongoose'); //Node Tool for MongoDB
const router = express.Router();
const config = require('./config/database') //Mongoose Config
const path = require('path'); //NodeJS Package for file paths
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser')
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could not connect to database: ', err);
  } else {
    console.log('Connected to database :', config.db);
  }
});

// Provide static directory for frontend
app.use(cors({
  origin: 'http://localhost:4200'
}))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/client/dist/client'))
app.use('/authentication', authentication)

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

// Start Server: Listen on port 8080
app.listen(8080, () => {
  console.log('Listening on port 8080')
});
