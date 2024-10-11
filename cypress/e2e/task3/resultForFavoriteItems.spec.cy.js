import FavoriteItemsPage from "../../page_object/task3/FavoriteItemsPage";
import Header from "../../page_object/task3/Header";
import Filter from "../../page_object/task3/Filter";
import Favorite from "../../page_object/task3/Favorite";

describe('Emag result for favorite items', () => {

    it('Emag result for favorite items', () => {
        const page = new FavoriteItemsPage();
        const header = new Header();
        const filter = new Filter();
        const favorite = new Favorite();

        const item = 'dji mini 4 pro';
        page.visitBaseUrl();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        header.getSearchInput()
            .invoke('attr', 'placeholder')
            .should('equal', 'Какво търсиш днес?');
        header.getSearchInput().click();
        header.getSearchDropdown().should('contain.text', 'Популярни търсения в eMAG');
        header.getSearchButtonReset().should('be.visible').and('be.enabled');
        header.getSearchInput().type(item);
        header.getSearchButtonReset().click();
        header.getSearchInput().should('contain.value', '');
        header.getSearchInput().type(item);
        header.getSearchInput().should('contain.value', item);
        header.getSearchBtn().click();
        filter.getSearchResultHeader()
            .should('contain.text','резултата')
            .and('contain.text',`за "${item}"`);
        //page.selectFilter();
        const arr = [0,1];
        favorite.addItemsToFavorite(arr);
        favorite.findHeart().should('have.text', '2');
        favorite.findHeart().click();
        favorite.findFavoriteItemInTheList(2).should('be.visible').and('contain.text','Изтрий');
        favorite.findFavoriteItemInTheList(2).click('right');
        favorite.findHeart().should('have.text', '1');
        favorite.findFavoriteItemInTheList(1).should('be.visible').and('contain.text','Изтрий');
        favorite.findFavoriteItemInTheList(1).click('right');
        favorite.checkHeartCleared().should('have.text', '0');

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