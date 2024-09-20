class EmagMobileDevicesFilterResultPage {

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

    findCategoryItems(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
            .find('span')
    }

}

export default EmagMobileDevicesFilterResultPage;