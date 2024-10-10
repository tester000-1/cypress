class Header {

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
        cy.get('a[class="js-megamenu-list-department-link gtm_31vgamc"]')
            //.find('li').eq(elNumber)
            .invoke('show')
        //     .find('div[class="megamenu-group"]').each(($el, index, $list) => {
        //     if ($el.someMethod() === 'Климатици') {
        //         console.log('el ' + $el)
        //         //cy.wrap($el).click()
        //     }
        // });
    }

    findCategoryItems(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
            .find('span')

        // cy.get('a[class="megamenu-item"]')
        //
        //
        //     .invoke('text').then(value => {
        //     if(value === 'Климатици'){
        //         wrap(value).click({force: true})
        //     }
        // })
        // cy.get('a[class="megamenu-item"]').click({force: true});
        // /klimatici/c?ref=hp_menu_quick-nav_418_26&type=category
    }

    clickMenuItem(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
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
        return cy.get('button[class="btn btn-default searchbox-submit-button"]').first();
    }

}

export default Header;