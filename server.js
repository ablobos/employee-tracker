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