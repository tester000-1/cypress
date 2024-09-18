class Emag5Page {

    basePage(){
        cy.visit("https://www.emag.bg/");
    }
    getTitle(){
        return cy.title();
    }
    getSearchInput(){
        return cy.get('input[id="searchboxTrigger"]');
    }
    getSearchButtonReset(){
        return cy.get('button[type="reset"]').first();
    }
    getSearchDropdown(){
        return cy.get('div[class="searchbox-dropdown"]')
            .find('p',).first();
    }
    getSearchBtn(){
        return cy.get('button[class="btn btn-default searchbox-submit-button"]').first();
    }
    getSearchResultHeader(){
        return cy.get('div[class="listing-page-title js-head-title"]').first();
    }
    selectFilter(){
        cy.get('div[class="sort-control-item"]').find('button[type="button"]').first().click()
    }
    addItemsToFavorite(arr){
        for (let i = 0; i < arr.length; i++) {
            cy.get('#card_grid')
                .find('div[class="card-item card-standard js-product-data js-card-clickable "]')
                .eq(arr[i])
                .find('button[class="add-to-favorites btn"]')
                .first().should('be.visible')
            cy.get('#card_grid')
                .find('div[class="card-item card-standard js-product-data js-card-clickable "]')
                .eq(arr[i])
                .find('button[class="add-to-favorites btn"]')
                .first()
                .click();
        }
    }
    findHeart(){
        return cy.get('span[class="jewel jewel-danger"]');
    }
    checkHeartCleared(){
        return cy.get('span[class="jewel jewel-danger hidden"]');
    }
    findFavoriteItemInTheList(index){
        return cy.get('div[class="card-list-content"]').eq(index - 1)
            .find('.text-right')
            .first();
    }

}
export default Emag5Page;