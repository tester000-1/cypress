import Emag2Page from "../../page_object/task3/EmagAirConditionerFilterResultPage";

describe('Emag air conditioner filter result', () => {

    it('Emag air conditioner filter result', () => {
        const page = new Emag2Page();
        page.baseUrl();
        page.getTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        page.findMenuItem('Големи електроуреди', 5);
        page.findAirConditioners('Големи електроуреди', 5);

        //Skipped step

        page.visitKlimatici();
        cy.get('button[data-id="6416"]').click();
        page.getDropdownItem(1).should('contain', 'Daikin');
        page.getDropdownItem(1).click();
        page.getFilterBtn().should('contain', 'виж още').and('contain', 'резултата');
        page.getFilterBtn().click();
        page.findCardTitle(1).should(/daikin/i);
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