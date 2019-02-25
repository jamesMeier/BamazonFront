const path = require('path');

function htmlRoutes (app) {
  // Below code handles when users 'visit' a page.
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + './public/index.html'));
  });
  // Default home route
  app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + './public/index.html'));
  });
};

// Export for use in main server.js file
module.exports = htmlRoutes;