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
            'Add Employee',
            'Remove Employee',
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