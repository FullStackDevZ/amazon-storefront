DROP DATABASE IF EXISTS amazon;

CREATE DATABASE amazon;

USE amazon;

CREATE TABLE products (
 id INTEGER NOT NULL AUTO_INCREMENT,
  item_id INTEGER NULL,
  product_name VARCHAR (100) NULL,
  department_name VARCHAR (100) NULL,
  price DECIMAL (10, 2) NULL,
  stock_quantity INTEGER NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (334568, "Maple Syrup", "Food", 2.00, 200),
(334569, "Trapper Keeper", "Stationary", 3.99, 197),
(33570, "Cascade Detergent", "Home", 7.99, 193);
