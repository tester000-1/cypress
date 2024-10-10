import AirConditionerResultPage from "../../page_object/task3/AirConditionerFilterResultPage";
import Header from "../../page_object/task3/Header";
import Filter from "../../page_object/task3/Filter";
import CardView from "../../page_object/task3/CardView";
import Pagination from "../../page_object/task3/Pagination";

describe('Emag air conditioner filter result', () => {

    it('Emag air conditioner filter result', () => {
        const page = new AirConditionerResultPage();
        const header = new Header();
        const filter = new Filter();
        const card = new CardView();
        const pagination = new Pagination();
        const conditionerName = "Daikin";
        page.visitBaseUrl();
        page.acceptCookies();
        page.dismissLoginModal();
        page.closeMarketBanner();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        header.findMenuItem('Големи електроуреди', 5);
        header.findCategoryItems('Големи електроуреди', 5);
        page.openView("klimatici");
        page.selectItemNameById("6416");
        card.getDropdownItem(1).should('contain', conditionerName);
        card.getDropdownItem(1).click();
        filter.getFilterBtn().should('contain', 'виж още').and('contain', 'резултата');
        filter.getFilterBtn().click();
        //Check the filter request to be completed
        page.getSectionTitle("Климатици Daikin").should('be.visible');
        card.findCardTitle(1).then(($item) => {
            const titleValue = $item.text().toLowerCase();
            expect(titleValue).to.contain(conditionerName.toLowerCase());
        });
        card.findAllCards().each(($el, index, $list) => {
            const titleValue = $el.text().toLowerCase();
            expect(titleValue).to.contain(conditionerName.toLowerCase());
        });
        pagination.clickPaginationNumber(2);
        card.findAllCards().each(($el, index, $list) => {
            const titleValue = $el.text().toLowerCase();
            expect(titleValue).to.contain(conditionerName.toLowerCase());
        });
        filter.selectSortingDropdown(3);
        //Wait until filter result load
        cy.waitUntil(() => page.getDivWithText("1 - 60 ot 134 Продукта").should('be.visible'));
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
Test Case 2
Step: Open eMAG.bg
Expected result: The browser tab title is “eMAG.bg - Широка гама продукти”
Step: Navigate to “Големи електроуреди – Климатици”
Expected result: The browser tab contains the string “Климатици” and the section title on the page is “Климатици”
Step: Under the section “Производител” click “виж повече”. Type Daikin in the search field. Check the Daikin checkbox. Click the “Филтрирай” button.
Expected result: Verify that each search result on the first 2 pages contains the word “Daikin” in its title.
Step: Sort the results by price in descending order from high to low.
Expected result: The price of products in the results (from top to bottom) should be equal to or higher than the price of the following product.
 */