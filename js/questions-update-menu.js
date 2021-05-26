const inquirer = require('inquirer');
const menuResponse = require('./menu-response');

// The update menu inquirer questions
const updateMenuOptions = [
    {
        type: 'list',
        message: 'What would you like to update?',
        name: 'updateMenu',
        choices: [
            'Update Employee Manager',
            'Update Employee Role',
            'Return to Main Menu'
        ],
    }
]

// Function prompting user to answer questions in the update menu
async function updateMenu(connection) {
    try {
        const answers = await inquirer.prompt(updateMenuOptions);
        let actionSelected = answers.updateMenu;
        menuResponse(actionSelected, connection);
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
}

module.exports = {
    updateMenu
}