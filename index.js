// Importing the required modules
require('dotenv').config();
const mysql = require('mysql2/promise');
const questions = require('./js/questions-main-menu');
const mainMenuResponse = require('./js/main-menu-response');

// Function to initiate the application
async function init () {
    try {
        const connection = await mysql.createConnection({
            // Details to establish connection to the server and the MySQL database
            host: process.env.DB_HOST,

            port: process.env.DB_PORT,

            user: process.env.DB_USER,

            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        try {
            const answers = await questions.promptInquirer()
            let actionSelected = answers.menu;
            mainMenuResponse(actionSelected, connection);

        }
        // If there is an error, it will be logged
        catch (error) {
            console.error(`Inquirer has failed: ${error}`);
        }
    }
    catch (error) {
        console.error(error.message);
    }
}

// Invoking the function to initiate the application
init();

module.exports = init;