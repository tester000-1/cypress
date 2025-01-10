class TopNavigation {

    findMenuItem(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
            .find('span')
            .invoke('text')
            .then(value => {
                expect(value).equal(text);
            });
    }

    findSubMenuItem(text, elNumber) {
        cy.get('.js-megamenu-list-department-link')
            .invoke('show')
    }

    findCategoryItems(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li')
            .eq(elNumber)
            .find('span')
    }

    clickMenuItem(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li')
            .eq(elNumber)
            .find('span')
            .click();
    }

    getSearchDropdown() {
        return cy.get('div[class="searchbox-dropdown"]')
            .find('p',).first();
    }

    getSearchInput() {
        return cy.get('input[id="searchboxTrigger"]');
    }

    getSearchButtonReset() {
        return cy.get('button[type="reset"]').first();
    }

    getSearchBtn() {
        return cy.get('.searchbox-submit-button').first();
    }

}

export default TopNavigation;