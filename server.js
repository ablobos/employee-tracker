require('dotenv').config();
require('console.table');

const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employeesDB'
});

connection.connect();

function getDepartments() {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM departments;`,
            (err, res) => {
                if (err) reject(err);
                else resolve(res);
            }
        );
    })
}

