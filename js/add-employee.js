const inquirer = require('inquirer');
const employeeQuestions = require('./employee-questions');

async function addEmployee(connection) {
    try {
        const answers = await inquirer
            .prompt(employeeQuestions)
            console.log(answers)

            try {
                const employeeInsert = await connection.query('INSERT INTO employee SET ?',
                    {
                        first_name: answers.employeeFirstName,
                        last_name: answers.employeeLastName,
                        role_id: Number(1),
                        manager_id: Number(101)
                    }
                )
                console.log("Result:", employeeInsert[0]);
                console.log('Employee has been added.');
                connection.end();
            }
            catch (error) {
                console.error(error);
            }
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
}

module.exports = {
    addEmployee
}