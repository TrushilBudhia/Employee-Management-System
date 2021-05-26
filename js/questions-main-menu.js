//const inquirer = require('inquirer');

const mainMenuOptions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'menu',
        choices: [
            'Add',
            'View',
            'Update',
            'Delete'
        ],
    },
]

// Function prompting user to answer questions
// async function promptInquirer() {
//     try {
//         const answers = await inquirer.prompt(mainMenuOptions);
//         return answers;
//     }
//     catch (error) {
//         console.error(`Inquirer has failed: ${error}`);
//     }
// }

module.exports = mainMenuOptions;