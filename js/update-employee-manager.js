async function updateEmployeeManager(connection, answers) {
    try {
        // If the user has select 'None' for manager, the managerId will be assigned a value of null
        // Otherwise, the managerId value is determined by the id number linked to the manager selected by the user
        let managerId;
        if (answers.employeeManagerSelect === 'None') {
            managerId = null;
        }
        else {
            const managerData = await connection.query(`SELECT id FROM manager WHERE manager='${answers.employeeManagerSelect}'`);
            managerId = managerData[0][0].id;
        }

        // Updating the employee manager details as selected by the user
        await connection.query(`UPDATE employee SET ? WHERE first_name='${answers.employeeFirstName}' and last_name='${answers.employeeLastName}'`,
            {
                manager_id: managerId
            }
        )
        // Logging a message advising the entry has been successfully updated in the database
        console.log(`Updated the manager details for ${answers.employeeSelect}. The manager is set to ${answers.employeeManagerSelect}`);
        connection.end();
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

module.exports = updateEmployeeManager;