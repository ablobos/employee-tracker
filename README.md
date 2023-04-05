# Employee Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 

This project is a command-line application using Node.js, Inquirer, and MySQL to manage a company's employee database. The application allows business-owners to view and mange departments, roles, and employees, providing them with an organized and efficient way to plan and run their business. Users are presented with a range of options, including viewing all departments, roles, and employees, adding new departments, roles, employees, and updating employee roles. It uses a formatted table to present data clearly, and users are prompted ot enter relevant information for each task. This project demonstrates how command-line applications can be used to simplify database management tasks for businesses.

## Table of Contents

- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [LIcense](#license)

## Built With

- Express.js
- Node.js
- mySQL
- Inquirer
- Console.table

## Installation

- Install `inquirer` via `npm i inquirer@8.2.4` 
- Install `mySQL` via `npm i mysql2`
- Install `console.table` via `npm i console.table`
- Connect to `mySQL` and source the sql databases
- Start the application by inputting `npm server.js` in the terminal

## Usage

- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business
---
- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Preview

[Untitled_ Apr 5, 2023 8_49 AM.webm](https://user-images.githubusercontent.com/117130907/230085836-b024ce96-46ba-4fd1-98da-dfb3cb7dc869.webm)

## License

See LICENSE in repo
