DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES departments(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employees(id)
)