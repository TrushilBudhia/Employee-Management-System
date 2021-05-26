DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

CREATE TABLE employees_db.department (
  id INT NOT NULL AUTO_INCREMENT,
  department VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees_db.role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (8),
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employees_db.employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees_db.manager (
  id INT NOT NULL AUTO_INCREMENT,
  manager VARCHAR(60),
  PRIMARY KEY (id)
);

SELECT * FROM employees_db.employee LIMIT 100;

SELECT employee.id, first_name, last_name, title, department, salary, manager
FROM employees_db.employee 
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN manager ON employee.manager_id = manager.id;


SELECT first_name, last_name FROM employees_db.employee WHERE manager_id;

SELECT id FROM role WHERE title='Accountant';
SELECT id FROM manager WHERE manager='Fan Ileming';