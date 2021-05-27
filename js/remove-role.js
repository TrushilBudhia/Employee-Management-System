async function removeRole(connection, answers) {
    try {
        // Removing the role selected by the user from the database
        await connection.query(`DELETE FROM role WHERE ?`,
            {
                title: answers.role,
            }
        )
        // Logging a message advising the entry has been successfully removed from the database
        console.log(`Removed the ${answers.role} role from the database.`);
        connection.end();
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

module.exports = removeRole;