const cTable = require('console.table');

async function viewEmployeesByManager(connection, answers) {
    try {
        // Joining data from the different tables together and displaying it in one table
        // Filtering the results to display on the manager selected by the user
        const employeeResults = await connection.query(`
        SELECT employee.id, first_name, last_name, title, department, salary, manager
        FROM employees_db.employee 
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN manager ON employee.manager_id = manager.id
        WHERE manager.manager = '${answers.menu}';
        `)
        // If statement to check if the employee has anyone they manage
        // If the result is not undefined, log the results in a console table
        // If the result is undefined, log a statement advising the user that the employee does not manage anyone
        if (employeeResults[0][0] !== undefined) {
            console.table(employeeResults[0]);
        }
        else {
            console.log(`${answers.menu} does not manage anyone at the moment.`);
        }
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = viewEmployeesByManager;
