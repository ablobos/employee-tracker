INSERT INTO department (name)
VALUES
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 10000, 2),
('Financial Analyst', 150000, 2),
('Marketing Coordinator', 70000, 3),
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operators Manager', 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Joon', 'Kim', 2, null),
('Abdiel', 'Villalobos', 1, 1),
('Eli', 'Hemesath', 4, null),
('Eric', 'Fritz', 3, 3),
('Matt', 'Hemsley', 6, null),
('Sarah', 'Riser', 5, 5),
('Taylor', 'Pedmo', 7, null),
('Kshiya', 'Hines', 8, 7);