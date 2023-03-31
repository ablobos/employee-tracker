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
