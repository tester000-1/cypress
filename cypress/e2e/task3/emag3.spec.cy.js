import Emag3Page from "../../page_object/task3/Emag3Page";

describe('Emag products', () => {
    it('products', () => {
        const page = new Emag3Page();
        page.basePage();
        page.getTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        page.findMenuItem('Здраве и красота', 8);
        page.findAirConditioners('Здраве и красота', 8);


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