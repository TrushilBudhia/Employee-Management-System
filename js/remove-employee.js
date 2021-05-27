async function removeEmployee(connection, answers) {
    try {
        // Removing the employee selected by the user from the database
        const removeEmployeeData = await connection.query(`
            DELETE FROM employee 
            WHERE first_name = '${answers.employeeFirstName}' and last_name = '${answers.employeeLastName}'
        `)
        const removeManagerData = await connection.query(`DELETE FROM manager WHERE ?`,
            {
                manager: answers.employeeFirstName + ' ' + answers.employeeLastName
            }
        )
        // Logging a message advising the entry has been successfully removed from the database
        console.log(`Removed ${answers.employeeSelect} from the database.`);
        connection.end();
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

module.exports = removeEmployee;