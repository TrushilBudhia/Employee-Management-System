//const inquirer = require('inquirer');
//const menuResponse = require('./menu-response');

// The add menu inquirer questions
const addMenuOptions = [
    {
        type: 'list',
        message: 'What would you like to add?',
        name: 'menu',
        choices: [
            'Add Department',
            'Add Employee',
            'Add Role',
            'Return to Main Menu'
        ],
    }
]

// Function prompting user to answer questions in the add menu
// async function addMenu(connection) {
//     try {
//         const answers = await inquirer.prompt(addMenuOptions);
//         let actionSelected = answers.addMenu;
//         menuResponse(actionSelected, connection);
//     }
//     catch (error) {
//         console.error(`Inquirer has failed: ${error}`);
//     }
// }

module.exports = addMenuOptions;