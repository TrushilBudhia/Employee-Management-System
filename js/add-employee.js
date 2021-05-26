const inquirer = require('inquirer');
const departmentQuestions = require('./questions-add-department');

async function addDepartment(connection) {
    try {
        const answers = await inquirer
            .prompt(departmentQuestions)
            console.log(answers)
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
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
}

module.exports = addDepartment;