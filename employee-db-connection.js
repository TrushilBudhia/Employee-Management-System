const mysql = require('mysql2/promise');

const employeeDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',

      port: 3306,

      user: 'root',

      password: 'C0de5t3@m22!',
      database: 'employeesDB',
    });

    const employeeInsert = connection.query('INSERT INTO employee SET ?',
        {
            first_name: 'Bames',
            last_name: 'Jond',
            role_id: 107,
            manager_id: 4
        }
    )
    console.log(employeeInsert[0]);

    const employeeResults = await connection.query("SELECT * FROM employee");
    console.log(employeeResults[0]);
    connection.end();
  }
  catch (error) {
    console.error(error.message);
  }
}

employeeDatabase();