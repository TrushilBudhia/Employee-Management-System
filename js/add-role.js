async function addRole(connection, answers) {
    // Using the department chosen by the user to determine the department id
    const departmentData = await connection.query(`SELECT id FROM department WHERE department='${answers.roleDepartment}'`);
    const departmentId = departmentData[0][0].id;

    try {
        // Inserting a new row of data into the role table based on the data provided by the user
        const roleInsert = await connection.query('INSERT INTO role SET ?',
            {
                title: answers.roleTitle,
                salary: answers.roleSalary,
                department_id: departmentId,
            }
        )
        // Logging a message advising the entry has been successfully added to the database
        console.log(`Added the role ${answers.roleTitle} to the database.`);
        connection.end();
    }
    // If there are any errors, they will be displayed in the console
    catch (error) {
        console.error(error);
    }
}

module.exports = addRole;