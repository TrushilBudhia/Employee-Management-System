async function addDepartment(connection, answers) {
    try {
        const departmentInsert = await connection.query('INSERT INTO department SET ?',
            {
                department: answers.departmentName,
            }
        )
        console.log(`Added the ${answers.departmentName} department to the database.`);
        connection.end();
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = addDepartment;