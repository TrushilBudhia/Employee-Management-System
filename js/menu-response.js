const addEmployee = require('./add-employee');
const viewAllEmployees = require('./view-all-employees');

async function menuResponse(actionSelected, connection) {
    try {
        switch (actionSelected) {
            case 'Add Employee':
                await addEmployee(connection);
                break;
            case 'Add Department':
                await addDepartment(connection);
                break;
            case 'Add Role':
                await addRole(connection);
                break;
            case 'Remove Employee':
                await removeEmployee(connection);
                break;
            case 'Remove Department':
                await removeDepartment(connection);
                break;
            case 'Return to Main Menu':
                await returnToMainMenu(connection);
                break;
            case 'Remove Employee':
                await removeEmployee(connection);
                break;
            case 'Update Employee Role':
                await updateEmployeeRole(connection);
                break;
            case 'Update Employee Manager':
                await updateEmployeeManager(connection);
                break;
            case 'View All Employees':
                await viewAllEmployees(connection);
                break;
            case 'View All Employees By Department':
                await viewAllEmployeesByDepartment(connection);
                break;
            case 'View All Employees By Manager':
                await viewAllEmployeesByManager(connection);
                break;
            case 'View All Roles':
                await viewAllRoles(connection);
                break;
            case 'View Total Utilized Budget of Department':
                await viewTotalBudgetByDepartment(connection);
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

module.exports = menuResponse;