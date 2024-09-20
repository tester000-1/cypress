//import BrowserUtils from "../../BrowserUtils";

class EmagAirConditionerFilterResultPage {

    baseUrl() {
        cy.visit(Cypress.env('BASE_URL'))
    }

    getTitle() {
        return cy.title();
    }

    findMenuItem(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
            .find('span')
            .invoke('text')
            .then(value => {
                expect(value).equal(text);
                console.log("value: " + value);
            });
    }

    findSubMenuItem(text, elNumber) {
        cy.get('a[class="js-megamenu-list-department-link gtm_31vgamc"]')
            .invoke('show')
    }

    findAirConditioners(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
            .find('span')
    }

    visitKlimatici() {
        cy.visit('https://www.emag.bg/klimatici/c?ref=hp_menu_quick-nav_418_26&type=category');
    }

    getDropdownItem(index) {
        return cy.get('div[class="gc-modal-option-wrapper"]').eq(1).find('div')
            .eq(index - 1)
            .find('button').first()
    }

    getFilterBtn() {
        return cy.get('button[class="gc-modal-footer-show-results font-bold gtm_zsertyhtnc"]');
    }

    findCardTitle(index) {
        return cy.get('h2[class="card-v2-title-wrapper"]').eq(index - 1);
    }

}

export default EmagAirConditionerFilterResultPage;