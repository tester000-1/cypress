import Emag4Page from "../../page_object/task3/Emag4Page";

describe('Emag products', () => {

    it('products', () => {
        const page = new Emag4Page();
        page.basePage();
        page.getTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        page.findMenuItem('Gaming', 4);
        page.clickMenuItem('Gaming', 4);
        page.navigateToConsoles();
        page.getGamingHeader().should('contain', 'Гейминг конзоли');
        page.clickVRLink();
        page.findSectionTitle().should('contain.text', 'VR Gaming Очила');
        page.moveLeftKnob('50');
        page.getPriceCheckbox().should('have.class', 'active');
        page.getMinPrice().invoke('val').then(value => {
            const bool = Number(value) >= 40;
            expect(bool).to.be.true;
        });
        page.getGridItemHeader(1).should('be.visible');
        page.pressGridItem(1);
        page.checkPriceForSelectedItem().should('contain', '1.739,99 лв.');
        page.checkHeaderForSelectedItem().should('contain', 'VR очила META Quest 3');
        page.addToCart();
        page.getModalHeader().should('contain', 'Продуктът е добавен в количката');
        page.getModalButton().should('contain','виж количката');
        page.getModalButton().first().click();
        page.addMoreItemsWithPlus(7); //7 + 1 = 8 items
        page.getFinalPrice().should('contain.text', '13.919,92 лв.')
        page.deleteCartItems(); //remove cart items
        page.getLastMessage().should('contain', 'Количката за пазаруване е празна. ' +
                'За да добавиш продукти в количката, моля да се върнеш в началото.');

    });

    after(() => {
        //Clear all cookies
        cy.clearAllCookies();
    });

});

/*
Step: Open eMAG.bg
Expected result: The browser tab title is “eMAG.bg - Широка гама продукти”
Step: Navigate to “Телефони Таблети & Лаптопи – Мобилни телефони и аксесоари - Мобилни телефони”
Expected result: The browser tab contains the string “Мобилни телефони” and the section title on the page is “Мобилни телефони”
Step: Under the section “Производител” click “виж повече”. Type Samsung in the search field. Check the Samsung checkbox. Click the “Филтрирай” button.
    Expected result: Verify that each search result on the first 2 pages contains the word “Samsung” in its title.
    Step: Sort the results by price in descending order from high to low.
    Expected result: The price of products in the results (from top to bottom) should be equal to or higher than the price of the following product.

 */