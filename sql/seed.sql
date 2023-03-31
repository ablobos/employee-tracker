use employeesDV;

INSERT INTO departments (name)
VALUES("Sales");

INSERT INTO departments (name)
VALUES("Solutions");

INSERT INTO departments (name)
VALUES("Account Management");

INSERT INTO departments (name)
VALUES("Delivery");

INSERT INTO roles (title, salary, department_id)
VALUES ("Account Director", "150000", "1");

INSERT INTO roles (title, salary, department_id)
VALUES ("Cloud Architect", "125000", "2");

INSERT INTO roles (title, salary, department_id)
VALUES ("Account Manager", "90000", "3");

INSERT INTO roles (title, salary, department_id)
VALUES ("Project Manager", "90000", "4");

INSERT INTO roles (title, salary, department_id)
VALUES ("Mechanic", "60000", "4");

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Joon", "Kim", "1");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Hemsley", "1", "1");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Fritz", "3", "1");

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Abdiel", "Villalobos", "2");

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Taylor", "Pedmo", "4");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Visgaitis", "4", "5");

