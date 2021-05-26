const inquirer = require('inquirer');
const menuResponse = require('./menu-response');

// The delete menu inquirer questions
const deleteMenuOptions = [
    {
        type: 'list',
        message: 'What would you like to update?',
        name: 'deleteMenu',
        choices: [
            'Remove Department',
            'Remove Employee',
            'Remove Role',
            'Return to Main Menu'
        ],
    }
]

// Function prompting user to answer questions in the delete menu
async function deleteMenu(connection) {
    try {
        const answers = await inquirer.prompt(deleteMenuOptions);
        let actionSelected = answers.deleteMenu;
        menuResponse(actionSelected, connection);
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
}

module.exports = {
    deleteMenu
}