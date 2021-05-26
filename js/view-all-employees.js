const cTable = require('console.table');
//const init = require('../index');
//const questions = require('./questions-main-menu');
//const start = require('../server');
//const mainMenuResponse = require('./main-menu-response');

async function viewAllEmployees(connection) {
    try {
        const employeeResults = await connection.query(`
        SELECT employee.id, first_name, last_name, title, department, salary, manager
        FROM employees_db.employee 
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN manager ON employee.manager_id = manager.id;
        `)
        //console.log("Log Employees", employeeResults[0]);
        console.table(employeeResults[0]);
        //console.log(init)
        // const answers = await questions.promptInquirer();
        // let actionSelected = answers.menu;
        // mainMenuResponse(actionSelected, connection);
        //start();
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
    //await init();
}

module.exports = viewAllEmployees;
