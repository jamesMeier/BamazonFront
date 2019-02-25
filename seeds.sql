-- // Drops the bamazon_db if it exists currently //
DROP DATABASE IF EXISTS bamazon_db;
-- // Creates the "bamazon_db" database //
CREATE DATABASE bamazon_db;

-- // Makes it so all of the following code will affect bamazon_db //
USE bamazon_db;


INSERT INTO Products SET department_name="Beauty", product_name="Chanel Chance Perfume", price=150.00, stock_quantity=25, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Home", product_name="Throw Pillow", price=19.99, stock_quantity=78, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Pets", product_name="Rhinestone Cat Collar", price=12.99, stock_quantity=3, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Pets", product_name=""Butch" Spiked Leather Dog Collar", price=24.99, stock_quantity=23, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Sports", product_name="Soccer Ball", price=10.00, stock_quantity=56, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Health", product_name="Women's Gummy Vitamins", price=18.99, stock_quantity=77, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Outdoor", product_name="Coleman LED Lantern", price=44.99, stock_quantity=21, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Clothing", product_name="Motorhead Tee", price=12.99, stock_quantity=2, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Electronics", product_name=""54" LED Flat-Screen Smart TV", price=124.99, stock_quantity=13, createdAt=NOW(), updatedAt=NOW();
INSERT INTO Products SET department_name="Auto", product_name="All-Weather Rubber Floor Mats, Set of 4", price=19.99, stock_quantity=53, createdAt=NOW(), updatedAt=NOW();