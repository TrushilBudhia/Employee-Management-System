// Function to validate user input is not an empty string
const answerValidator = async (input) => {
    return (input === '' ? 'Invalid value' : true);
}

const departmentQuestions = [
    {
        type: 'input',
        message: 'What is the department name to be added?',
        name: 'departmenttName',
        validate: answerValidator,
    },
]

module.exports = departmentQuestions;