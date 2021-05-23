const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const questions = require("./utils/main-menu-selection");
const employeeQuestions = require('./utils/add-employee-questions');

const employeeDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',

      port: 3306,

      user: 'root',

      password: 'C0de5t3@m22!',
      database: 'employeesDB',
    });

    async function addEmployee() {
        return inquirer
            .prompt(employeeQuestions)
            .then((response) => {
                console.log(response)
                const employeeInsert = connection.query('INSERT INTO employee SET ?',
                    {
                        first_name: response.employeeFirstName,
                        last_name: response.employeeLastName,
                        role_id: Number(1),
                        manager_id: Number(101)
                    }
                )
                const roleInsert = connection.query('INSERT INTO role SET ?',
                    {
                        title: response.employeeRole,
                    }
                )
                console.log('Employee has been added.');
                // console.log(roleInsert);
                // console.log(employeeInsert);
                connection.end();
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    async function menuResponse (actionSelected) {
        switch (actionSelected) {
            case 'Add Employee':
                await addEmployee();
                break;
            default:
                console.log('Process End');
                break;
        }
    }

    await questions.promptInquirer()
        .then((response) => {
            let actionSelected = response.menu;
            menuResponse(actionSelected);
        })
        .catch(error => {
            console.error(`Inquirer has failed: ${error}`);
        })

    // const employeeResults = await connection.query("SELECT * FROM employee");
    // console.log(employeeResults[0]);

  }
  catch (error) {
    console.error(error.message);
  }
}

employeeDatabase();