// Function to validate user input is not an empty string
const answerValidator = async (input) => {
    return (input === '' ? 'Invalid value' : true);
}

const employeeQuestions = [
    {
        type: 'input',
        message: 'What is the employee\'s first name?',
        name: 'employeeFirstName',
        validate: answerValidator,
    },
    {
        type: 'input',
        message: 'What is the employee\'s last name?',
        name: 'employeeLastName',
        validate: answerValidator,
    },
    {
        type: 'list',
        message: 'What is the employee\'s role?',
        name: 'employeeRole',
        choices: [
            'Account Manager',
            'Accountant',
            'Client Support',
            'Lawyer',
            'Lead Engineer',
            'Legal Team Lead',
            'Sales Lead',
            'Salesperson',
            'Software Engineer',
            'Web Developer',
        ],
    },
    {
        type: 'list',
        message: 'Who is the employee\'s manager?',
        name: 'employeeManager',
        choices: [
            'Carah Sonner',
            'Cara Lroft',
            'Eatniss Kverdeen',
            'Fan Ileming',
            'Gorothy Dale',
            'Jndiana Iones',
            'Parry Moppins',
            'Rllen Eipley',
            'Sony Ttark',
            'Suke Lkywalker',
            'Varth Dader',
            'Wruce Bayne',
        ],
    },
]

module.exports = employeeQuestions;