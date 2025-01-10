import ElectricalRazorsPage from "../../page_object/task3/ElectricalRazorsPage";
import TopNavigation from "../../page_object/task3/TopNavigation";
import Filter from "../../page_object/task3/Filter";
import CardView from "../../page_object/task3/CardView";
import Pagination from "../../page_object/task3/Pagination";
import Browser from "../../utils/Browser";

describe('Emag electrical razors filter result', () => {

    it('Emag electrical razors filter result', () => {
        const page = new ElectricalRazorsPage();
        const nav = new TopNavigation();
        const filter = new Filter();
        const card = new CardView();
        const pagination = new Pagination();
        const browser = new Browser();
        const razorName = "Braun";
        browser.visitBaseUrl()
        page.acceptCookies();
        page.dismissLoginModal();
        page.closeMarketBanner();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        nav.findMenuItem('Здраве и красота', 8);
        nav.findCategoryItems('Здраве и красота', 8);
        browser.openPageView("elektricheski-samobrysnachki");
        page.getSectionTitle('Ел. самобръсначки').should('be.visible');
        page.expandFilterMoreBrands();
        page.selectBrandById("447");
        // Check the filter request to be completed
        page.checkIfElementsAreLoaded().should('be.visible');
        card.findAllCards().each(($el, index, $list) => {
            const titleValue = $el.text().toLowerCase();
            expect(titleValue).to.contain(razorName.toLowerCase());
        });
        pagination.clickPaginationNumber(2);
        card.findAllCards().each(($el, index, $list) => {
            const titleValue = $el.text().toLowerCase();
            expect(titleValue).to.contain(razorName.toLowerCase());
        });
        filter.selectSortingDropdown(3);
        //Wait until filter result load
        cy.waitUntil(() => page.getDivWithText("1 - 60 ot 93 Продукта").should('be.visible'));
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
Test Case 3
Step: Open eMAG.bg
Expected result: The browser tab title is “eMAG.bg - Широка гама продукти”
Step: Navigate to “Здраве и красота – Ел. самобръсначки”
Expected result: The browser tab contains the string “Електрически самобръсначки” and the section title on the page is “Ел. самобръсначки”
Step: Under the section “Производител” click “виж повече”. Type Braun in the search field. Check the Braun checkbox. Click the “Филтрирай” button.
Expected result: Verify that each search result on the first 2 pages contains the word “Braun” in its title.
Step: Sort the results by price in descending order from high to low.
Expected result: The price of products in the results (from top to bottom) should be equal to or higher than the price of the following product.

 */