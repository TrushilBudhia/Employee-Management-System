DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

CREATE TABLE employeesDB.department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employeesDB.role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employeesDB.employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

INSERT INTO employeesDB.employee (first_name, last_name, role_id, manager_id)
VALUES ("Test", "Code", 1, 15); 

SELECT * FROM employeesDB.employee LIMIT 100;
