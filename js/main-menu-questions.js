const inquirer = require('inquirer');

const menuSelect = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'menu',
        choices: [
            'View All Employees',
            'View All Employees By Department',
            'View All Employees By Manager',
            'View All Roles',
            'View Total Utilized Budget of Department',
            'Add Employee',
            'Add Department',
            'Add Role',
            'Remove Employee',
            'Remove Department',
            'Remove Role',
            'Update Employee Role',
            'Update Employee Manager'
        ],
    },
]

// Function prompting user to answer questions
function promptInquirer () {
    return inquirer
        .prompt(menuSelect)
}

module.exports = {
    promptInquirer
}