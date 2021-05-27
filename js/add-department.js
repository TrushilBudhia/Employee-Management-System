async function addDepartment(connection, answers) {
    try {
        // Inserting a new row of data into the department table based on the data provided by the user
        await connection.query('INSERT INTO department SET ?',
            {
                department: answers.departmentName,
            }
        )
        // Logging a message advising the entry has been successfully added to the database
        console.log(`Added the ${answers.departmentName} department to the database.`);
        connection.end();
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

module.exports = addDepartment;