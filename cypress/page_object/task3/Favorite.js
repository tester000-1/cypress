class Favorite {

    addItemsToFavorite(arr) {
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

    findHeart() {
        return cy.get('span[class="jewel jewel-danger"]');
    }

    checkHeartCleared() {
        return cy.get('span[class="jewel jewel-danger hidden"]');
    }

    findFavoriteItemInTheList(index) {
        return cy.get('div[class="card-list-content"]').eq(index - 1)
            .find('.text-right')
            .first();
    }

}

export default Favorite;