const cTable = require('console.table');

async function viewAllEmployee(connection) {
    try {
        const employeeResults = await connection.query('INSERT INTO employee SET ?',
            {
                first_name: answers.employeeFirstName,
                last_name: answers.employeeLastName,
                role_id: Number(1),
                manager_id: Number(101)
            }
        )
        console.log("Log Employees", employeeResults[0]);
        cTable(employeeResults);
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
    init();
}

module.exports = {
    viewAllEmployee
}