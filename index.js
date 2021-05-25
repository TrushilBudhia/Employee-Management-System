require('dotenv').config();
const mysql = require('mysql2/promise');
const questions = require('./js/main-menu-questions');
const { menuResponse } = require('./js/menu-response');

async function init () {
    try {
        const connection = await mysql.createConnection({
        host: process.env.DB_HOST,

        port: 3306,

        user: process.env.DB_USER,

        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        });

        try {
            const answers = await questions.promptInquirer()
            let actionSelected = answers.menu;
            menuResponse(actionSelected, connection);
        }
        catch (error) {
            console.error(`Inquirer has failed: ${error}`);
        }
    }
    catch (error) {
        console.error(error.message);
    }
}

init();