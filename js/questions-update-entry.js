const inquirer = require("inquirer");
const updateEmployeeManager = require('./update-employee-manager');
const updateEmployeeRole = require('./update-employee-role');

async function updateEmployeeManagerQuestions(connection) {
    try {
        // Creating variable that holds the array data of the employees
        const employeeData = await connection.query(`SELECT * FROM employee`);
        const employeeArray = employeeData[0].map(employee => employee.first_name + ' ' + employee.last_name);

        // Inquirer questions for adding an employee
        const employeeChosen = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which employee do you want to update the manager details for?',
                name: 'employeeSelect',
                choices: employeeArray,
            },
        ])
        // Using the employee selected by the user to generate an array of employees to select as a manager which does not include the selected employee
        const employeeSelected = employeeChosen.employeeSelect;
        const managerData = await connection.query(`SELECT * FROM manager WHERE manager != '${employeeSelected}'`);
        const managerArray = managerData[0].map(manager => manager.manager);
        // Adding the None option to the manager array in case the employee needs to be updated to have no manager
        managerArray.push('None');
        const managerChosen = await inquirer.prompt([
            {
                type: 'list',
                message: 'Who do you want to set as the selected employee\'s manager?',
                name: 'employeeManagerSelect',
                choices: managerArray,
            },
        ])
        // Creating the answers object for the updateEmployeeManager function to utilise when updating the information
        const answers = {
            employeeFirstName: employeeChosen.employeeSelect.split(" ")[0],
            employeeLastName: employeeChosen.employeeSelect.split(" ")[1],
            employeeSelect: employeeChosen.employeeSelect,
            employeeManagerSelect: managerChosen.employeeManagerSelect,
        }
        // Invoking the function to insert the data to the database
        await updateEmployeeManager(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

async function updateEmployeeRoleQuestions(connection) {
    try {
        // Creating variable that holds the array data of the employees
        const employeeData = await connection.query(`SELECT * FROM employee`);
        const employeeArray = employeeData[0].map(employee => employee.first_name + ' ' + employee.last_name);

        // Inquirer questions for adding an employee
        const employeeChosen = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which employee do you want to update the role for?',
                name: 'employeeSelect',
                choices: employeeArray,
            },
        ])
        // Creating an array with all the roles
        const roleData = await connection.query(`SELECT * FROM role`);
        const roleArray = roleData[0].map(role => role.title);

        const roleChosen = await inquirer.prompt([
            {
                type: 'list',
                message: 'Who do you want to set as the selected employee\'s manager?',
                name: 'employeeRoleSelect',
                choices: roleArray,
            },
        ])
        // Creating the answers object for the updateEmployeeManager function to utilise when updating the information
        const answers = {
            employeeFirstName: employeeChosen.employeeSelect.split(" ")[0],
            employeeLastName: employeeChosen.employeeSelect.split(" ")[1],
            employeeSelect: employeeChosen.employeeSelect,
            employeeRoleSelect: roleChosen.employeeRoleSelect,
        }
        // Invoking the function to insert the data to the database
        await updateEmployeeRole(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

// Exporting the functions
module.exports = {
    updateEmployeeManagerQuestions,
    updateEmployeeRoleQuestions

}