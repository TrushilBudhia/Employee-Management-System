// Importing the required modules
require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const mainMenuOptions = require('./js/questions-main-menu');
const { addMenuOptions, deleteMenuOptions, updateMenuOptions, viewMenuOptions } = require('./js/questions-sub-menu');
const { addDepartmentQuestions, addEmployeeQuestions, addRoleQuestions } = require('./js/questions-add-entry');
const { viewEmployeesByDepartmentQuestions, viewEmployeesByManagerQuestions, viewEmployeesByRoleQuestions } = require('./js/questions-view-all-employees');
const { updateEmployeeManagerQuestions, updateEmployeeRoleQuestions } = require('./js/questions-update-entry');
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

async function getResults(connection, promptFunction) {
    try {
        await promptFunction(connection);
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
    await init();
}

async function menuResponse(actionSelected, connection) {
    try {
        switch (actionSelected) {
            case 'Add Department':
                await getResults(connection, addDepartmentQuestions);
                break;
            case 'Add Employee':
                await getResults(connection, addEmployeeQuestions);
                break;
            case 'Add Role':
                await getResults(connection, addRoleQuestions);
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
            case 'Update Employee Manager':
                await getResults(connection, updateEmployeeManagerQuestions);
                break;
            case 'Update Employee Role':
                await getResults(connection, updateEmployeeRoleQuestions);
                break;
            case 'View All Employees':
                await getResults(connection, viewAllEmployees);
                break;
            case 'View All Employees By Department':
                await getResults(connection, viewEmployeesByDepartmentQuestions);
                break;
            case 'View All Employees By Manager':
                await getResults(connection, viewEmployeesByManagerQuestions);
                break;
            case 'View All Employees By Role':
                await getResults(connection, viewEmployeesByRoleQuestions);
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
async function init() {
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
