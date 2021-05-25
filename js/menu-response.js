const { addEmployee } = require('./add-employee');

async function menuResponse (actionSelected, connection) {
    try {
        switch (actionSelected) {
            case 'View All Employees':
                await viewAllEmployees();
                break;
            case 'View All Employees By Department':
                await viewAllEmployeesByDepartment();
                break;
            case 'View All Employees By Manager':
                await viewAllEmployeesByManager();
                break;
            case 'Add Employee':
                await addEmployee(connection);
                break;
            case 'Remove Employee':
                await removeEmployee();
                break;
            case 'Update Employee Role':
                await updateEmployeeRole();
                break;
            case 'Update Employee Manager':
                await updateEmployeeManager();
                break;
            default:
                console.log('An error has occurred. Process End');
                break;
        }
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = {
    menuResponse
}