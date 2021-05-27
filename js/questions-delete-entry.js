const inquirer = require("inquirer");
const removeDepartment = require('./remove-department');
const removeEmployee = require('./remove-employee');
const removeRole = require('./remove-role');

async function removeDepartmentQuestions(connection) {
    try {
        // Creating variable that holds the array data of the departments
        const departmentData = await connection.query(`SELECT * FROM department`);
        const departmentArray = departmentData[0].map(department => department.department);

        // Inquirer question for removing a department
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which department do you want to remove?',
                name: 'department',
                choices: departmentArray,
            },
        ])
        // Invoking the function to remove the requested data by the user from the database
        await removeDepartment(connection, answers);
    }
    // If there is an error, it will be logged in the console
    catch (error) {
        console.error(error);
    }
}

async function removeEmployeeQuestions(connection) {
    try {
        // Creating variable that holds the array data of the employees
        const employeeData = await connection.query(`SELECT * FROM employee`);
        const employeeArray = employeeData[0].map(employee => employee.first_name + ' ' + employee.last_name);

        // Inquirer question for removing an employee
        const employeeChosen = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which employee do you want to remove?',
                name: 'employeeSelect',
                choices: employeeArray,
            },
        ])
        // Creating the answers object for the removeEmployee function to utilise when removing the data
        const answers = {
            employeeFirstName: employeeChosen.employeeSelect.split(" ")[0],
            employeeLastName: employeeChosen.employeeSelect.split(" ")[1],
            employeeSelect: employeeChosen.employeeSelect,
        }
        // Invoking the function to remove the requested data by the user from the database
        await removeEmployee(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

async function removeRoleQuestions(connection) {
    try {
        // Creating variable that holds the array data of the roles
        const roleData = await connection.query(`SELECT * FROM role`);
        const roleArray = roleData[0].map(role => role.title);

        // Inquirer questions for adding an employee
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which role do you want to remove?',
                name: 'role',
                choices: roleArray,
            },
        ])
        // Invoking the function to remove the requested data by the user from the database
        await removeRole(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

// Exporting the functions
module.exports = {
    removeDepartmentQuestions,
    removeEmployeeQuestions,
    removeRoleQuestions
}