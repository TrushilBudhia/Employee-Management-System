const cTable = require('console.table');

async function viewEmployeesByDepartment(connection, answers) {
    try {
        // Joining data from the different tables together and displaying it in one table 
        // Filtering the results to display on the department selected by the user
        const employeeResults = await connection.query(`
        SELECT employee.id, first_name, last_name, title, department, salary, manager
        FROM employees_db.employee 
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN manager ON employee.manager_id = manager.id
        WHERE department.department = '${answers.menu}';
        `)
        // Displaying the results in a table in the console
        console.table(employeeResults[0]);
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = viewEmployeesByDepartment;
