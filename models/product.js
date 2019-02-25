module.exports = function(connection, Sequelize) {
    const Product = connection.define('Product', {
        product_name: Sequelize.STRING,
        department_name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        stock_quantity: Sequelize.INTEGER
    });
    return Product;
  }
	

	
