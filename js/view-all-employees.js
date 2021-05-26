const cTable = require('console.table');

async function viewAllEmployees(connection) {
    try {
        const employeeResults = await connection.query(`
        SELECT employee.id, first_name, last_name, title, department, salary, manager
        FROM employees_db.employee 
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN manager ON employee.manager_id = manager.id;
        `)
        console.table(employeeResults[0]);
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = viewAllEmployees;
