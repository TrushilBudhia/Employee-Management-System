const inquirer = require("inquirer");
const addDepartment = require('./add-department');
const addEmployee = require('./add-employee');
const addRole = require('./add-role');

// Function to validate user input is not an empty string
const answerValidator = (input) => {
    return (input === '' ? 'Invalid value' : true);
}
// Function to validate user input is not not a number (NaN)
const answerNumberValidator = (input) => {
    return (input === '' || isNaN(input) || input < 0 ? 'Invalid value' : true);
}

async function addDepartmentQuestions(connection) {
    try {
        // Inquirer questions for adding a department
        const answers = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the department name to be added?',
                name: 'departmentName',
                validate: answerValidator,
            },
        ])
        // Invoking the function to insert the data to the database
        await addDepartment(connection, answers);
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

async function addEmployeeQuestions(connection) {
    try {
        // Creating variables that hold the array data of the roles and managers
        const roleData = await connection.query(`SELECT title FROM role`);
        const roleArray = roleData[0].map(role => role.title);
        const managerData = await connection.query(`SELECT manager FROM manager`);
        const managerArray = managerData[0].map(manager => manager.manager);
        // Adding the None option to the manager array in case the employee needs to be updated to have no manager
        managerArray.push('None');

        // Inquirer questions for adding an employee
        const answers = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the employee\'s first name?',
                name: 'employeeFirstName',
                validate: answerValidator,
            },
            {
                type: 'input',
                message: 'What is the employee\'s last name?',
                name: 'employeeLastName',
                validate: answerValidator,
            },
            {
                type: 'list',
                message: 'What is the employee\'s role?',
                name: 'employeeRole',
                choices: roleArray,
            },
            {
                type: 'list',
                message: 'Who is the employee\'s manager?',
                name: 'employeeManager',
                choices: managerArray,
            },
        ])
        // Invoking the function to insert the data to the database
        await addEmployee(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

async function addRoleQuestions(connection) {
    try {
        // Creating a variable that holds the array data of the departments
        const departmentData = await connection.query(`SELECT department FROM department`);
        const departmentArray = departmentData[0].map(department => department.department);

        // Inquirer questions for adding a role
        const answers = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the title of the role?',
                name: 'roleTitle',
                validate: answerValidator,
            },
            {
                type: 'input',
                message: 'What is the salary for the role',
                name: 'roleSalary',
                validate: answerNumberValidator,
            },
            {
                type: 'list',
                message: 'What department is the role under?',
                name: 'roleDepartment',
                choices: departmentArray,
            },
        ])
        // Invoking the function to insert the data to the database
        await addRole(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

// Exporting the functions
module.exports = {
    addDepartmentQuestions,
    addEmployeeQuestions,
    addRoleQuestions
}