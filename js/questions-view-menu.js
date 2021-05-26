// The view menu inquirer questions
const viewMenuOptions = [
    {
        type: 'list',
        message: 'What would you like to view?',
        name: 'menu',
        choices: [
            'View All Employees',
            'View All Employees By Department',
            'View All Employees By Manager',
            'View All Employees By Role',
            'View Total Utilized Budget of Department',
            'Return to Main Menu'
        ],
    }
]

module.exports = viewMenuOptions;