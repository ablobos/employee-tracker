require("dotenv").config();
require("console.table");

const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employeesDB",
});

connection.connect();

function getDepartments() {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM departments;`, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

function getRoles() {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM roles;`, (err, res) => {
      if (err) reject(err);
      else resolves(res);
    });
  });
}

function getEmployees() {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM employees;`, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

function displayMenu() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Select an option!",
        name: "choice",
        choices: [
          {
            name: "Add Department",
            value: addDepartment,
          },
          {
            name: "Add Role",
            value: addRole,
          },
          {
            name: "Add Employee",
            value: addEmployee,
          },
          {
            name: "View Departments",
            value: viewDepartments,
          },
          {
            name: "View Roles",
            value: viewRoles,
          },
          {
            name: "View Employees",
            value: viewEmployees,
          },
          {
            name: "View Employees By Manager",
            value: viewEmployeesByManager,
          },
          {
            name: "Update Employee Role",
            value: updateRole,
          },
          {
            name: "Update Employee Manager",
            value: updateEmployeeManager,
          },
          {
            name: "Delete Department",
            value: deleteDepartment,
          },
          {
            name: "Delete Role",
            value: deleteRole,
          },
          {
            name: "Delete Employee",
            value: deleteEmployee,
          },
          {
            name: "Get Total Department Budget",
            value: viewDepartmentBudget,
          },
          {
            name: "Exit",
            value: exit,
          },
        ],
        loop: false,
      },
    ])
    .then(({ choice }) => choice());
}

function addDepartment() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "departmentName",
      },
    ])
    .then(({ departmentName }) => {
      return new Promise((resolve, reject) => {
        connection.query(
          `INSERT INTO departments SET ?;`,
          { name: departmentName },
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });
    })
    .then(() => displayMenu());
}

function addRole() {
  return getDepartments()
    .then((departments) => {
      return inquirer.prompt([
        {
          type: "input",
          message: "What is the title of the role you wish to create?",
          name: "title",
        },
        {
          type: "number",
          message: "What is the salary of that role?",
          name: "salary",
        },
        {
          type: "list",
          message: "Which department is this role?",
          name: "department_id",
          choices: departments.map(({ id, name }) => ({
            name: name,
            value: id,
          })),
        },
      ]);
    })
    .then(({ title, salary, department_id }) => {
      return new Promise((resolve, reject) => {
        connection.query(
          `INSERT INTO roles SET ?;`,
          {
            title: title,
            salary: salary,
            department_id: department_id,
          },
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });
    })
    .then(() => displayMenu());
};

function addEmployee(title, salary, department_id) {
    return Promise.all([getRoles(), getEmployees()])
    .then(([roles, employees]) => {
        return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the first name of the employee?",
                name: 'first_name'
            },
            {
                type: 'input',
                message: 'What is the last name of the employee?',
                name: 'last_name'
            },
            {
                type: 'list',
                message: 'What role is this employee?',
                name: 'role_id',
                choices: roles.map(({ id, title }) => ({ name: title, value: id })),
                loop: false
            },
            {
                type: 'list',
                message: 'Who is the manager responsible for the employee?',
                name: 'manager_id',
                choices: [...employees.map(({ id, first_name, last_name }) => ({ name: `${first_name} ${last_name}`, value: id })), 'None'],
                loop: false
            }
        ]);
    })
    .then(({ first_name, last_name, role_id, manager_id }) => {
        return new Promise((resolve, reject) => {
            connection.query(
                `INSERT INTO employees SET ?;`,
                {
                    first_name: first_name,
                    last_name: last_name,
                    role_id: role_id,
                    manager_id: manager_id === 'None' ? undefined : manager_id
                },
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });
    })
    .then(() => displayMenu());
}
