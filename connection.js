const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'C0de5t3@m22!',
    database: 'employeesDB',
});

// connection.connect(function(error) {
//     if (error) throw error;
// });

module.exports = connection;