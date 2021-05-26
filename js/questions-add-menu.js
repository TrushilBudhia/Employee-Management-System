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

module.exports = addMenuOptions;