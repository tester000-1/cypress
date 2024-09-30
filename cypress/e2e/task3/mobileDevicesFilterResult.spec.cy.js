import MobileDevicesFilterResultPage from "../../page_object/task3/MobileDevicesFilterResultPage";
import Header from "../../page_object/task3/Header";
import Filter from "../../page_object/task3/Filter";
import CardView from "../../page_object/task3/CardView";
import Pagination from "../../page_object/task3/Pagination";

describe('Emag mobile devices filter result', () => {
    it('Emag mobile devices filter result', () => {
        const page = new MobileDevicesFilterResultPage();
        const header = new Header();
        const filter = new Filter();
        const card = new CardView();
        const pagination = new Pagination();
        const brandName = "Samsung";
        page.visitBaseUrl()
        page.acceptCookies();
        page.dismissLoginModal();
        page.closeMarketBanner();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        header.findMenuItem('Телефони, Таблети & Лаптопи', 1);
        header.findCategoryItems('Телефони, Таблети & Лаптопи', 1);
        page.openView("mobilni-telefoni");
        page.getSectionTitle('Мобилни телефони').should('be.visible');
        page.closeMarketBanner();
        page.expandFilterMoreBrands();
        page.selectBrandById("42");
        // Check the filter request to be completed
        page.getSectionTitle("Мобилни телефони Samsung");
        card.findAllCards().each(($el, index, $list) => {
            const titleValue = $el.text().toLowerCase();
            expect(titleValue).to.contain(brandName.toLowerCase());
        });
        pagination.clickPaginationNumber(2);
        card.findAllCards().each(($el, index, $list) => {
            const titleValue = $el.text().toLowerCase();
            expect(titleValue).to.contain(brandName.toLowerCase());
        });
        filter.selectSortingDropdown(3);
        //Wait until filter result load
        cy.waitUntil(() => page.getDivWithText("1 - 60 ot 359 Продукта").should('be.visible'));
        card.findAllCardsPrice().each(($el, index, $list) => {
            let correct = false;
            let oldPrice = 0;
            let price = card.convertStringPriceToInt($el.text());
            if (index > 0) {
                card.findSpecificCardPrice(index - 1).then(locator => {
                    oldPrice = card.convertStringPriceToInt(locator.text());
                    console.log('old price: ' + oldPrice + ' new price ' + price)
                });
                correct = oldPrice === price || oldPrice < price;
            } else {correct = true;}
            expect(correct, 'The new price should be equal or higher than the previous one').to.be.true;
        });
    });

});

/*
Test Case 1
Step: Open eMAG.bg
Expected result: The browser tab title is “eMAG.bg - Широка гама продукти”
Step: Navigate to “Телефони Таблети & Лаптопи – Мобилни телефони и аксесоари - Мобилни телефони”
Expected result: The browser tab contains the string “Мобилни телефони” and the section title on the page is “Мобилни телефони”
Step: Under the section “Производител” click “виж повече”. Type Samsung in the search field. Check the Samsung checkbox. Click the “Филтрирай” button.
Expected result: Verify that each search result on the first 2 pages contains the word “Samsung” in its title.
Step: Sort the results by price in descending order from high to low.
Expected result: The price of products in the results (from top to bottom) should be equal to or higher than the price of the following product.

 */