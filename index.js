// Importing the required modules
require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const mainMenuOptions = require('./js/questions-main-menu');
const addMenuOptions = require('./js/questions-add-menu');
const viewMenuOptions = require('./js/questions-view-menu');
const updateMenuOptions = require('./js/questions-update-menu');
const deleteMenuOptions = require('./js/questions-delete-menu');
const employeeQuestions = require('./js/questions-add-employee');
const departmentQuestions = require('./js/questions-add-department');
const roleQuestions = require('./js/questions-add-role');
const addEmployee = require('./js/add-employee');
const addDepartment = require('./js/add-department');
const addRole = require('./js/add-role');
const viewAllEmployees = require('./js/view-all-employees');

async function promptQuestions(connection, questions, functionToCall) {
    try {
        const answers = await inquirer
            .prompt(questions)
            await functionToCall(connection, answers);
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
    init();
}

async function requestToViewAllEmployees(connection) {
    try {
        await viewAllEmployees(connection);
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
    init();
}

async function menuResponse(actionSelected, connection) {
    try {
        switch (actionSelected) {
            case 'Add Department':
                await promptQuestions(connection, departmentQuestions, addDepartment);
                break;
            case 'Add Employee':
                await promptQuestions(connection, employeeQuestions, addEmployee);
                break;
            case 'Add Role':
                await promptQuestions(connection, roleQuestions, addRole);
                break;
            case 'Remove Department':
                await promptQuestions(connection, removeDepartmentQuestions, removeDepartment);
                break;
            case 'Remove Employee':
                await promptQuestions(connection, removeEmployeeQuestions, removeEmployee);
                break;
            case 'Remove Role':
                await promptQuestions(connection, removeRoleQuestions, removeRole);
                break;
            case 'Return to Main Menu':
                await init();
                break;
            case 'Update Employee Role':
                await promptQuestions(connection, updateEmployeeRoleQuestions, updateEmployeeRole);
                break;
            case 'Update Employee Manager':
                await promptQuestions(connection, updateEmployeeManagerQuestions, updateEmployeeManager);
                break;
            case 'View All Employees':
                await requestToViewAllEmployees(connection);
                break;
            case 'View All Employees By Department':
                await promptQuestions(connection, viewEmployeesByDepartmentQuestions, viewEmployeesByDepartment);
                break;
            case 'View All Employees By Manager':
                await promptQuestions(connection, viewEmployeesByManagerQuestions, viewEmployeesByManager);
                break;
            case 'View All Employees By Role':
                await promptQuestions(connection, viewEmployeesByRoleQuestions, viewEmployeesByRole);
                break;
            case 'View Total Utilized Budget of Department':
                await viewTotalBudgetByDepartment(connection);
                break;
            default:
                console.log('An error has occurred. Process End');
                break;
        }
    }
    catch (error) {
        console.error(error);
    }
}

async function menuSelection(connection, menuOption) {
    try {
        const answers = await inquirer.prompt(menuOption);
        let actionSelected = answers.menu;
        menuResponse(actionSelected, connection);
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
}

async function mainMenuResponse(actionSelected, connection) {
    try {
        switch (actionSelected) {
            case 'Add':
                await menuSelection(connection, addMenuOptions);
                break;
            case 'View':
                await menuSelection(connection, viewMenuOptions);
                break;
            case 'Update':
                await menuSelection(connection, updateMenuOptions);
                break;
            case 'Delete':
                await menuSelection(connection, deleteMenuOptions);
                break;
            default:
                console.log('An error has occurred. Process End');
                break;
        }
    }
    catch (error) {
        console.error(error);
    }
}

// Function to initiate the application
async function init () {
    try {
        const connection = await mysql.createConnection({
            // Details to establish connection to the server and the MySQL database
            host: process.env.DB_HOST,

            port: process.env.DB_PORT,

            user: process.env.DB_USER,

            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        try {
            const answers = await inquirer.prompt(mainMenuOptions);
            let actionSelected = answers.menu;
            mainMenuResponse(actionSelected, connection);

        }
        // If there is an error, it will be logged
        catch (error) {
            console.error(`Inquirer has failed: ${error}`);
        }
    }
    catch (error) {
        console.error(error.message);
    }
}

// Invoking the function to initiate the application
init();