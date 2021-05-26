async function addRole(connection, answers) {
    console.log(answers)

    const departmentData = await connection.query(`SELECT id FROM department WHERE department='${answers.roleDepartment}'`);
    const departmentId = departmentData[0][0].id;

    try {
        const roleInsert = await connection.query('INSERT INTO role SET ?',
            {
                title: answers.roleTitle,
                salary: answers.roleSalary,
                department_id: departmentId,
            }
        )
        console.log(`Added the role ${answers.roleTitle} to the database.`);
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = addRole;