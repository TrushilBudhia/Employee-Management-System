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

// The delete menu inquirer questions
const deleteMenuOptions = [
    {
        type: 'list',
        message: 'What would you like to update?',
        name: 'menu',
        choices: [
            'Remove Department',
            'Remove Employee',
            'Remove Role',
            'Return to Main Menu'
        ],
    }
]

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

// Exporting the variables
module.exports = {
    addMenuOptions,
    deleteMenuOptions,
    updateMenuOptions,
    viewMenuOptions
}