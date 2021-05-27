const inquirer = require("inquirer");
const viewEmployeesByDepartment = require('./view-all-employees-by-department');
const viewEmployeesByRole = require('./view-all-employees-by-role');
const viewEmployeesByManager = require('./view-all-employees-by-manager');
const viewTotalUtilizedBudgetOfDepartment = require('./view-total-utilized-budget-of-department');

// Function to prompt inquirer with a selection of departments for the user to choose which to view the employees in
async function viewEmployeesByDepartmentQuestions(connection) {
    try {
        const departmentData = await connection.query(`SELECT department FROM department`);
        const departmentArray = departmentData[0].map(department => department.department);

        // The view all employees by department inquirer question
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which department would you like to view the employees in?',
                name: 'menu',
                choices: departmentArray,
            }
        ])
        // Invoking the function to view the requested data
        await viewEmployeesByDepartment(connection, answers);
    }
    // If there is an error, it will be logged in the console
    catch (error) {
        console.error(error);
    }
}

// Function to prompt inquirer with a selection of managers for the user to choose which to view the employees by
async function viewEmployeesByManagerQuestions(connection) {
    try {
        const managerData = await connection.query(`SELECT manager FROM manager`);
        const managerArray = managerData[0].map(manager => manager.manager);

        // The view all employees by manager inquirer question
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which manager would you like to view the employees by?',
                name: 'menu',
                choices: managerArray,
            }
        ])
        // Invoking the function to view the requested data
        await viewEmployeesByManager(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

// Function to prompt inquirer with a selection of roles for the user to choose which to view the employees by
async function viewEmployeesByRoleQuestions(connection) {
    try {
        const roleData = await connection.query(`SELECT title FROM role`);
        const roleArray = roleData[0].map(role => role.title);

        // The view all employees by role inquirer question
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which role would you like to view the employees by?',
                name: 'menu',
                choices: roleArray,
            }
        ])
        // Invoking the function to view the requested data
        await viewEmployeesByRole(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

// Function to prompt inquirer with a selection of roles for the user to choose which to view the employees by
async function viewTotalUtilizedBudgetOfDepartmentQuestions(connection) {
    try {
        const departmentData = await connection.query(`SELECT department FROM department`);
        const departmentArray = departmentData[0].map(department => department.department);

        // The view departments by total utilized budget inquirer question
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which department would you like to view the total utilized budget of?',
                name: 'menu',
                choices: departmentArray,
            }
        ])
        // Invoking the function to view the requested data
        await viewTotalUtilizedBudgetOfDepartment(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

// Exporting the functions
module.exports = {
    viewEmployeesByDepartmentQuestions,
    viewEmployeesByManagerQuestions,
    viewEmployeesByRoleQuestions,
    viewTotalUtilizedBudgetOfDepartmentQuestions
}