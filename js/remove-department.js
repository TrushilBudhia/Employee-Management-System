async function removeDepartment(connection, answers) {
    try {
        // Removing the department selected by the user from the database
        const removeDepartmentData = await connection.query(`DELETE FROM department WHERE ?`,
            {
                department: answers.department,
            }
        )
        // Logging a message advising the entry has been successfully removed from the database
        console.log(`Removed the ${answers.department} department from the database.`);
        connection.end();
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

module.exports = removeDepartment;