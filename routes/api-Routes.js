const db = require('../models');


function apiRoutes(app) {

    // GET route for getting all of the products
    app.get('/api/products', function (req, res) {
        // Here we add an 'include' property to our options in our findAll query
        db.Product.findAll({}).then(function (products) {
            res.json(products);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    // Get route for retrieving a single product
    app.get('/api/products/:id', function (req, res) {
        // Here we add an 'include' property to our options in our findOne query
        db.Product.findOne({
            where: {
                id: req.params.id
            },

        }).then(function (products) {
            res.json(products);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    //put route for updating stock quantity of a single item
    app.put('/api/products/:id', function (req, res) {
        
        db.Product.update(
            req.body,
            { where: {
                id: req.params.id},

        }).then(function (products) {
            res.json(products);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
}

// Export for use in main server.js file
module.exports = apiRoutes;