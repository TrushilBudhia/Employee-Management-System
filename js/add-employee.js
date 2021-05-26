async function addEmployee(connection, answers) {
    try {
        console.log(answers)
        // Using the role chosen by the user to determine the role id
        const roleData = await connection.query(`SELECT id FROM role WHERE title='${answers.employeeRole}'`);
        const roleId = roleData[0][0].id;

        // If the user has select 'None' for manager, the managerId will be assigned a value of null
        // Otherwise, the managerId value is determined by the id number linked to the manager
        let managerId;
        if(answers.employeeManager === 'None') {
            managerId = null;
        } 
        else {
            const managerData = await connection.query(`SELECT id FROM manager WHERE manager='${answers.employeeManager}'`);
            managerId = managerData[0][0].id;
        }
        
        // Inserting a new row of data into the employee table based on the data provided by the user
        const employeeInsert = await connection.query('INSERT INTO employee SET ?',
            {
                first_name: answers.employeeFirstName,
                last_name: answers.employeeLastName,
                role_id: roleId,
                manager_id: managerId
            }
        )
        //console.log("Result:", employeeInsert[0]);
        // Logging a message advising the entry has been successfully added to the database
        console.log(`Added ${answers.employeeFirstName} ${answers.employeeLastName} to the database.`);
        connection.end();
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

module.exports = addEmployee;