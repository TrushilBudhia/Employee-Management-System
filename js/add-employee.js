async function addEmployee(connection, answers) {
    console.log(answers)

    const roleData = await connection.query(`SELECT id FROM role WHERE title='${answers.employeeRole}'`);
    const roleId = roleData[0][0].id;

    let managerId;
    if(answers.employeeManager === 'None') {
        managerId = null;
    } 
    else {
        const managerData = await connection.query(`SELECT id FROM manager WHERE manager='${answers.employeeManager}'`);
        managerId = managerData[0][0].id;
    }
    
    try {
        const employeeInsert = await connection.query('INSERT INTO employee SET ?',
            {
                first_name: answers.employeeFirstName,
                last_name: answers.employeeLastName,
                role_id: roleId,
                manager_id: managerId
            }
        )
        //console.log("Result:", employeeInsert[0]);
        console.log(`Added ${answers.employeeFirstName} ${answers.employeeLastName} to the database.`);
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = addEmployee;