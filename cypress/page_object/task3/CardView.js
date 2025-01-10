class CardView {

    getDropdownItem(index) {
        return cy.get('div[class="gc-modal-option-wrapper"]').eq(1).find('div')
            .eq(index - 1)
            .find('button').first()
    }

    findCardTitle(index) {
        return cy.get('#card_grid').find('h2[class="card-v2-title-wrapper"] > a').eq(index - 1);
    }

    findAllCards(){
        return cy.get('#card_grid').find('h2[class="card-v2-title-wrapper"] > a');
    }

    findAllCardsPrice(){
        return cy.get('#card_grid')
            .find('p[class="product-new-price"]');
    }

    findSpecificCardPrice(number){
        return cy.get('#card_grid').find('p[class="product-new-price"]').eq(number);
    }

    convertStringPriceToInt(value){
        return value
            .replace("лв.", "")
            .replace(",", "")
            .replace(".", "");
    }

}

export default CardView;