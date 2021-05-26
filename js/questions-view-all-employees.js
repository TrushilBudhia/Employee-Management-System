const inquirer = require("inquirer");
const viewEmployeesByDepartment = require('./view-all-employees-by-department');
const viewEmployeesByRole = require('./view-all-employees-by-role');
const viewEmployeesByManager = require('./view-all-employees-by-manager');


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
        await viewEmployeesByDepartment(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

async function viewEmployeesByManagerQuestions(connection) {
    try {
        const managerData = await connection.query(`SELECT manager FROM manager`);
        const managerArray = managerData[0].map(manager => manager.manager);
        
        // The view all employees by department inquirer question
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which manager would you like to view the employees by?',
                name: 'menu',
                choices: managerArray,
            }
        ])
        await viewEmployeesByManager(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

async function viewEmployeesByRoleQuestions(connection) {
    try {
        const roleData = await connection.query(`SELECT title FROM role`);
        const roleArray = roleData[0].map(role => role.title);

        // The view all employees by department inquirer question
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which role would you like to view the employees by?',
                name: 'menu',
                choices: roleArray,
            }
        ])
        await viewEmployeesByRole(connection, answers);
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = {
    viewEmployeesByDepartmentQuestions, 
    viewEmployeesByManagerQuestions,
    viewEmployeesByRoleQuestions
}