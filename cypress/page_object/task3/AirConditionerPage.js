const BasePage = require('./BasePage');

class AirConditionerPage extends BasePage {

    selectItemNameById(id) {
        cy.get('button[data-id="' + id + '"]').click();
    }

}

export default AirConditionerPage;