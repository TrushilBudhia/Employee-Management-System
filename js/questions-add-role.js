// Function to validate user input is not an empty string
const answerValidator = async (input) => {
    return (input === '' ? 'Invalid value' : true);
}

const answerNumberValidator = async (input) => {
    return (isNaN(input) || input < 0 ? 'Invalid value' : true);
}

const roleQuestions = [
    {
        type: 'input',
        message: 'What is the title of the role?',
        name: 'roleTitle',
        validate: answerValidator,
    },
    {
        type: 'input',
        message: 'What is the salary for the role',
        name: 'roleSalary',
        validate: answerNumberValidator,
    },
    {
        type: 'list',
        message: 'What department is the role under?',
        name: 'roleDepartment',
        choices: [
            'Engineering',
            'Finance', 
            'Human Resources',
            'IT',
            'Legal',
            'Sales',
        ],
    },
]

module.exports = roleQuestions;