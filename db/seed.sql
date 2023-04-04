INSERT INTO
    department (name)
VALUES
    ('IT'),
    ('Finance & Accounting'),
    ('Sales & Marketing'),
    ('Operations');

INSERT INTO
    roles (title, salary, department_id)
VALUES
    ('Full Stack Developer', 80000, 1),
    ('Software Engineer', 120000, 1),
    ('Accountant', 10000, 2),
    ('Financial Analyst', 150000, 2),
    ('Marketing Coordinator', 70000, 3),
    ('Sales Lead', 90000, 3),
    ('Project Manager', 100000, 4),
    ('Operators Manager', 90000, 4);

INSERT INTO
    employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Joon', 'Kim', 1, null),
    ('Abdiel', 'Villalobos', 2, 1),
    ('Eli', 'Hemesath', 3, null),
    ('Eric', 'Fritz', 4, 3),
    ('Matt', 'Hemsley', 5, null),
    ('Sarah', 'Riser', 6, 5),
    ('Taylor', 'Pedmo', 7, null),
    ('Kshiya', 'Hines', 8, 7);