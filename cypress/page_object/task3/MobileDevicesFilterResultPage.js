const BasePage = require('./BasePage');

class MobileDevicesFilterResultPage extends BasePage {

    expandFilterMoreBrands(){
        cy.get('div[data-filter-id="6416"]').find('a[data-filter-id="6416"]')
            .click();
    }

    selectBrandById(id){
        cy.get('div[class="filter-body-extra"]').find(`a[data-option-id="${id}"]`).click({multiple:false});
        cy.get('div[class="filter-footer"]').find('button:contains("Филтрирай")').first().click({force:true});
    }

}

export default MobileDevicesFilterResultPage;