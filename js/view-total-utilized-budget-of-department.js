const cTable = require('console.table');

async function viewTotalUtilizedBudgetOfDepartment(connection, answers) {
    try {
        // Creating an array with the relevant salary details based on the employees under the department selected by the user
        const departmentData = await connection.query(`SELECT id FROM department WHERE department = '${answers.menu}'`);
        const departmentId = departmentData[0][0].id;
        const salaryData = await connection.query(`
            SELECT salary 
            FROM employees_db.employee 
            LEFT JOIN role ON employee.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            WHERE department_id = '${departmentId}'
        `);
        const salaryArray = salaryData[0].map(budget => Number(budget.salary));
        // Assigning the spending variable with the total value of the salary amounts inside the salary array
        const spending = salaryArray.reduce(totalSalary);
        function totalSalary(total, salary) {
            return total + salary;
        }

        // Joining data from the different tables together and displaying it in one table
        // Filtering the results to display the data from the department selected by the user
        const employeeResults = await connection.query(`
        SELECT employee.id, first_name, last_name, title, department, salary
        FROM employees_db.employee 
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        WHERE department.department = '${answers.menu}';
        `)
        // Displaying the results in a table in the console
        console.table(employeeResults[0]);
        console.log(`The total utilized budget by the ${answers.menu} department is $${spending}`);
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = viewTotalUtilizedBudgetOfDepartment;
