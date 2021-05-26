const { addMenu } = require('./questions-add-menu');
const { viewMenu } = require('./questions-view-menu');
const { updateMenu } = require('./questions-update-menu');
const { deleteMenu } = require('./questions-delete-menu');

async function mainMenuResponse(actionSelected, connection) {
    try {
        switch (actionSelected) {
            case 'Add':
                await addMenu(connection);
                break;
            case 'View':
                await viewMenu(connection);
                break;
            case 'Update':
                await updateMenu(connection);
                break;
            case 'Delete':
                await deleteMenu(connection);
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

module.exports = mainMenuResponse;