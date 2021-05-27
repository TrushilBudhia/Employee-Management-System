async function updateEmployeeRole(connection, answers) {
    try {
        // The roleId value is determined by the id number linked to the role selected by the user
        const roleData = await connection.query(`SELECT id FROM role WHERE title='${answers.employeeRoleSelect}'`);
        roleId = roleData[0][0].id;

        // Updating the employee manager details as selected by the user
        const updateEmployeeData = await connection.query(`UPDATE employee SET ? WHERE first_name='${answers.employeeFirstName}' and last_name='${answers.employeeLastName}'`,
            {
                role_id: roleId
            }
        )
        // Logging a message advising the entry has been successfully updated in the database
        console.log(`Updated the role details for ${answers.employeeSelect}. The role is set to ${answers.employeeRoleSelect}`);
        connection.end();
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

module.exports = updateEmployeeRole;