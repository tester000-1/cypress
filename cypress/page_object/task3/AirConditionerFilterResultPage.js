const BasePage = require('./BasePage');

class AirConditionerFilterResultPage extends BasePage {

    selectItemNameById(id) {
        cy.get('button[data-id="' + id + '"]').click();
    }

}

export default AirConditionerFilterResultPage;