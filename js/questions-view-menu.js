const inquirer = require('inquirer');
const menuResponse = require('./menu-response');

// The view menu inquirer questions
const viewMenuOptions = [
    {
        type: 'list',
        message: 'What would you like to view?',
        name: 'viewMenu',
        choices: [
            'View All Employees',
            'View All Employees By Department',
            'View All Employees By Manager',
            'View All Roles',
            'View Total Utilized Budget of Department',
            'Return to Main Menu'
        ],
    }
]

// Function prompting user to answer questions in the view menu
async function viewMenu(connection) {
    try {
        const answers = await inquirer.prompt(viewMenuOptions);
        let actionSelected = answers.viewMenu;
        menuResponse(actionSelected, connection);
    }
    catch (error) {
        console.error(`Inquirer has failed: ${error}`);
    }
}

module.exports = {
    viewMenu
}