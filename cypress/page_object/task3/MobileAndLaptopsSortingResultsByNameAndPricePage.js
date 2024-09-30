const BasePage = require('./BasePage');

class MobileAndLaptopsSortingResultsByNameAndPricePage extends BasePage {

    navigateToConsoles() {
        cy.get('section[class="emg-subd-banner-widget emg-widget"]').first().click();
    }

    getFirstH1() {
        return cy.get('h1').first();
    }

    clickVRLink() {
        cy.get('.mrg-top-xs > :nth-child(4)').click();
    }

    findSectionTitle() {
        return cy.get('li[class="active"]').first();
    }

    checkPriceForSelectedItem() {
        return cy.get('p[class="product-new-price"]');
    }

    checkHeaderForSelectedItem() {
        return cy.get('h1[class="page-title"]').first();
    }

    addToCart() {
        cy.get('button[type="submit"]').should('contain', 'Добави в количката').then(
            item => item.click()
        )
    }

    getModalHeader() {
        return cy.get('h4[class="mrg-sep-none"]').first()
    }

    getModalButton() {
        return cy.get('a[data-test="atc-modal-cart-details"]');
    }

    addMoreItemsWithPlus(count) {
        cy.get('button[data-test="increaseQtyBtn"]').should('be.visible');
        for (let i = 0; i < count; i++) {
            cy.get('button[data-test="increaseQtyBtn"]').click({force: true, multiple: true})
        }
        // cy.get('button[data-test="increaseQtyBtn"]').click({force: true, multiple: true});
    }

    getFinalPrice() {
        return cy.get('p[class="product-new-price"]', {timeout: 6000})
    }

    deleteCartItems() {
        cy.get('div[class="line-footer-action-buttons"]').eq(1).should('contain', 'Изтрий')
        cy.get('div[class="line-footer-action-buttons"]').find('button').first().click({force: true});
    }

    getLastMessage() {
        return cy.get('p[class="mrg-btm-none"]').first();
    }

}

export default MobileAndLaptopsSortingResultsByNameAndPricePage;