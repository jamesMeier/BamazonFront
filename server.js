// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');

const app = express();

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 3000;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, "./public")));

// Link in html and api routes
const apiRoutes = require('./routes/api-Routes.js');
const htmlRoutes = require('./routes/html-Routes.js');

apiRoutes(app);
htmlRoutes(app);

const db = require('./models');

// Syncs our database first
db.sequelize.sync().then(function(){

  // Starts our server on the predefined PORT
  // Only starts if the db successfully syncs
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });
});
