DROP DATABASE IF EXISTS `burgerdb`;
CREATE DATABASE `burgerdb`;

USE burgerdb;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean NOT NULL default false,
create_at TIMESTAMP,
PRIMARY KEY (id)
);
