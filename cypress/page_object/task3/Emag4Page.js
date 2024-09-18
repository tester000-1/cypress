class Emag4Page {

    basePage(){
        cy.visit("https://www.emag.bg/");
    }
    getTitle(){
        return cy.title();
    }
    findMenuItem(text, elNumber){
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
            .find('span')
            .invoke('text')
            .then(value => {
                expect(value).equal(text);
                //console.log("value: " + value);
            });
    }
    clickMenuItem(text, elNumber) {
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
            .find('span')
            .click();
    }
    navigateToConsoles(){
        cy.get('section[class="emg-subd-banner-widget emg-widget"]').first().click();
    }
    getGamingHeader(){
        return cy.get('h1').first();
    }
    clickVRLink(){
        cy.get('.mrg-top-xs > :nth-child(4)').click();
    }
    findSectionTitle(){
        return cy.get('li[class="active"]').first();
    }
    moveLeftKnob(value){
        cy.get('a[class="knob left"]')
            .first()
            .invoke('attr', 'style', `left: ${value}%;`);
        //Fake swipe by using css
        cy.get('a[class="knob left"]').click();
    }
    getPriceCheckbox(){
        return cy.get('.filter-custom-price > .js-filter-item');
    }
    getMinPrice(){
        return cy.get('.js-custom-price-min');
    }
    getGridItemHeader(item){
        return cy.get('#card_grid').eq(item - 1).find('h2').first();
    }
    pressGridItem(item){
        return cy.get('#card_grid').eq(item - 1).find('img').first().click();
    }

    getHeaderBefore(){
        return cy.get('div[class="pad-hrz-xs"]').first().then(($target) => {
            console.log($target.text())
            return $target.text();
        });
    }
    checkPriceForSelectedItem(){
        return cy.get('p[class="product-new-price"]');
    }
    checkHeaderForSelectedItem(){
        return cy.get('h1[class="page-title"]').first();
    }
    addToCart(){
        cy.get('button[type="submit"]').should('contain', 'Добави в количката').then(
            item => item.click()
        )
    }
    getModalHeader(){
        return cy.get('h4[class="mrg-sep-none"]').first()
    }
    getModalButton(){
        return cy.get('a[data-test="atc-modal-cart-details"]');
    }
    addMoreItemsWithPlus(count){
        cy.get('button[data-test="increaseQtyBtn"]').should('be.visible');
        for(let i = 0; i < count; i++){
            cy.get('button[data-test="increaseQtyBtn"]').click({force: true, multiple: true})
        }
        // cy.get('button[data-test="increaseQtyBtn"]').click({force: true, multiple: true});
    }
    getFinalPrice(){
        return cy.get('p[class="product-new-price"]',{timeout: 6000})
    }
    deleteCartItems(){
        cy.get('div[class="line-footer-action-buttons"]').eq(1).should('contain', 'Изтрий')
        cy.get('div[class="line-footer-action-buttons"]').find('button').first().click({force: true});
    }
    getLastMessage(){
        return cy.get('p[class="mrg-btm-none"]').first();
    }

}
export default Emag4Page;