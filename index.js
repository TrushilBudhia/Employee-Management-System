// Importing the required modules
require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const mainMenuOptions = require('./js/questions-main-menu');
const { addMenuOptions, deleteMenuOptions, updateMenuOptions, viewMenuOptions } = require('./js/questions-sub-menu');
const { addDepartmentQuestions, addEmployeeQuestions, addRoleQuestions } = require('./js/questions-add-entry');
const { viewEmployeesByDepartmentQuestions, viewEmployeesByManagerQuestions, viewEmployeesByRoleQuestions, viewTotalUtilizedBudgetOfDepartmentQuestions } = require('./js/questions-view-entry');
const { updateEmployeeManagerQuestions, updateEmployeeRoleQuestions } = require('./js/questions-update-entry');
const { removeDepartmentQuestions, removeEmployeeQuestions, removeRoleQuestions } = require('./js/questions-delete-entry');
const viewAllEmployees = require('./js/view-all-employees');

// Function to invoke another function that loads the next inquirer questions
// The questions asked will change depending on the selection the user makes when deciding what to add, view, update or delete
async function getResults(connection, promptFunction) {
    try {
        await promptFunction(connection);
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
    await init();
}

// Function that handles the selection by the user in the add, view, update and delete menus
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
                await getResults(connection, removeDepartmentQuestions);
                break;
            case 'Remove Employee':
                await getResults(connection, removeEmployeeQuestions);
                break;
            case 'Remove Role':
                await getResults(connection, removeRoleQuestions);
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
                await getResults(connection, viewTotalUtilizedBudgetOfDepartmentQuestions);
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

// Function to promt inquirer with the questions reflecting the menu option selected by the user
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

// Function to direct the user to another menu depending on the selection they have made
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

async function printWelcome() {
    try {
        console.log(`
    ,-------------------------------------------------,
    |     __    __     _                              |
    |    / / /\\ \\ \\___| | ___ ___  _ __ ___   ___     |
    |    \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\    |
    |     \\  /\\  /  __/ | (_| (_) | | | | | |  __/    |
    |      \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|    |
    |                                                 |
    '-------------------------------------------------'
        `)
    }
    catch (error) {
        console.error(error.message);
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
printWelcome();
init();
