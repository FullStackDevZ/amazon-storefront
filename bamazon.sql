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
VALUES (100, "Maple Syrup", "Food", 2.00, 200),
(101, "Trapper Keeper", "Stationary", 3.99, 197),
(102, "Cascade Detergent", "Home", 7.99, 193),
(103, "Michael Jordan Jersey", "Sports", 4999.00, 5),
(104, "Phillips Screwdriver", "Home Improvement", 4.99, 153),
(105, "Yoga Mat", "Fitness", 19.99, 99),
(106, "Snickers", "Snacks", 1.49, 43),
(107, "Yankees Hat", "Sports", 19.99, 96),
(108, "Suitcase", "Travel", 49.99, 47),
(109, "Evian Water 16 oz.", "Food", 1.99, 34);
