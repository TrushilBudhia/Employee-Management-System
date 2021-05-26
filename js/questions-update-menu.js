// The update menu inquirer questions
const updateMenuOptions = [
    {
        type: 'list',
        message: 'What would you like to update?',
        name: 'menu',
        choices: [
            'Update Employee Manager',
            'Update Employee Role',
            'Return to Main Menu'
        ],
    }
]

module.exports = updateMenuOptions;