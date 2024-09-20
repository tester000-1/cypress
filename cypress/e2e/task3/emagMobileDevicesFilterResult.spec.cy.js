import Emag1Page from "../../page_object/task3/EmagMobileDevicesFilterResultPage";

describe('Emag mobile devices filter result', () => {
    
    it('Emag mobile devices filter result', () => {
        const page = new Emag1Page();
        page.baseUrl();
        page.getTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        page.findMenuItem('Телефони, Таблети & Лаптопи', 1);
        page.findCategoryItems('Телефони, Таблети & Лаптопи', 1);
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