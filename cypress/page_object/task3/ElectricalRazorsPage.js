const BasePage = require('./BasePage');

class ElectricalRazorsPage extends BasePage {

    expandFilterMoreBrands(){
        cy.get('div[data-filter-id="6416"]').find('a[data-filter-id="6416"]')
            .click();
    }

    checkIfElementsAreLoaded(){
        cy.get('div[class="filter-footer"]').first().should('be.hidden');
        return cy.get('div[class="ph-card"]').find('button[data-id="6416"]').eq(0);
    }

    selectBrandById(id){
        cy.get('div[class="filter-body-extra"]').find(`a[data-option-id="${id}"]`).click({multiple:false});
        cy.get('div[class="filter-footer"]').find('button:contains("Филтрирай")').first().click({force:true});
    }

}

export default ElectricalRazorsPage;