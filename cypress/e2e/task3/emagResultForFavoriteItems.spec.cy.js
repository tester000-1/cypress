import Emag5Page from "../../page_object/task3/EmagResultForFavoriteItemsPage";

describe('Emag result for favorite items', () => {

    it('Emag result for favorite items', () => {
        const page = new Emag5Page();
        const item = 'dji mini 4 pro';
        page.baseUrl();
        page.getTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        page.getSearchInput()
            .invoke('attr', 'placeholder')
            .should('equal', 'Какво търсиш днес?');
        page.getSearchInput().click();
        page.getSearchDropdown().should('contain.text', 'Популярни търсения в eMAG');
        page.getSearchButtonReset().should('be.visible').and('be.enabled');
        page.getSearchInput().type(item);
        page.getSearchButtonReset().click();
        page.getSearchInput().should('contain.value', '');
        page.getSearchInput().type(item);
        page.getSearchInput().should('contain.value', item);
        page.getSearchBtn().click();
        page.getSearchResultHeader()
            .should('contain.text','резултата')
            .and('contain.text',`за "${item}"`);
        const arr = [0,1];
        page.addItemsToFavorite(arr);
        page.findHeart().should('have.text', '2');
        page.findHeart().click();
        page.findFavoriteItemInTheList(2).should('be.visible').and('contain.text','Изтрий');
        page.findFavoriteItemInTheList(2).click('right');
        page.findHeart().should('have.text', '1');
        page.findFavoriteItemInTheList(1).should('be.visible').and('contain.text','Изтрий');
        page.findFavoriteItemInTheList(1).click('right');
        page.checkHeartCleared().should('have.text', '0');

    });

    after(() => {
        cy.clearAllCookies();
    });

});

/*
Test Case 5
Step: Open eMAG.bg
Expected result: The browser tab title is “eMAG.bg - Широка гама продукти”
Step: Click the search textbox
Expected result: The search textbox with placeholder “Какво търсиш днес?” text “Популярни търсения в eMAG”, cross (X), and magnifier buttons are displayed.
Step: Type ‘dji mini 4 pro’ in the search textbox
Expected result: The text in the textbox is ‘dji mini 4 pro’.
Step: Click the cross button
Expected result: The text in the textbox is empty.
Step: Type ‘dji mini 4 pro’ in the search textbox
Expected result: The text in the textbox is ‘dji mini 4 pro’.
Step: Click the magnifier button
Expected result: The page’s header follows this structure: ‘some_numbers резултата some_text за “search_string”’
Step: Sort items by popularity
Expected result: The first item’s title contains ‘DJI’.
Step: Click the heart icon on the first two items in the list
Expected result: The heart icons in the items changed to active. The heart icon in the header contains 2.
Step: Click the “Любими” menu item in the header
Expected result: Items from the previous step were successfully added to favorites with correct details. The header includes the text ‘Любими 2 Продукта’.
Step: Click the ‘Изтрий’ button on the second item
Expected result: The item was successfully removed from favorites. The header includes the text ‘Любими 1 Продукт’.
Step: Click the ‘Изтрий’ button on the last item
Expected result: The item was successfully removed from favorites. The header includes the text ‘Любими 0 Продукта’.

 */