import {Timeout} from "../../utils/Timeout";

class Filter {

    getFilterBtn() {
        return cy.get('.gc-modal-footer-show-results');
    }

    selectFilter() {
        cy.get('div[class="sort-control-item"]').find('button[type="button"]').first().click()
    }

    getSearchResultHeader() {
        return cy.get('div[class="listing-page-title js-head-title"]').first();
    }

    moveLeftKnob(value) {
        cy.get('a[class="knob left"]')
            .first()
            .invoke('attr', 'style', `left: ${value}%;`);
        //Fake swipe by using css
        cy.get('a[class="knob left"]').click();
    }

    getPriceCheckbox() {
        return cy.get('.filter-custom-price > .js-filter-item');
    }

    getMinPrice() {
        return cy.get('.js-custom-price-min');
    }

    getGridItemHeader(item) {
        return cy.get('#card_grid').eq(item - 1).find('h2').first();
    }

    pressGridItem(item) {
        return cy.get('#card_grid').eq(item - 1).find('img').first().click();
    }

    selectSortingDropdown(value) {
        const result = `li:nth-child(${value})`;
        cy.get('span:contains("Най-популярни")')
            .click({multiple: true, force: true});
        cy.get('div[tab-index="-1"]', {timeout: Timeout.EXTRA_EXTENSIVE})
            .find(result).then(s => {
            cy.wrap(s).click({multiple: true});
        });
    }

}

export default Filter;