class Emag2Page {

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
                console.log("value: " + value);
        });
    }
    findSubMenuItem(text, elNumber){
        cy.get('a[class="js-megamenu-list-department-link gtm_31vgamc"]')
            //.find('li').eq(elNumber)
            .invoke('show')
        //     .find('div[class="megamenu-group"]').each(($el, index, $list) => {
        //     if ($el.someMethod() === 'Климатици') {
        //         console.log('el ' + $el)
        //         //cy.wrap($el).click()
        //     }
        // });
    }
    findAirConditioners(text, elNumber){
        cy.get('ul[class="megamenu-list"]')
            .find('li').eq(elNumber)
            .find('span')



        // cy.get('a[class="megamenu-item"]')
        //
        //
        //     .invoke('text').then(value => {
        //     if(value === 'Климатици'){
        //         wrap(value).click({force: true})
        //     }
        // })
        // cy.get('a[class="megamenu-item"]').click({force: true});
        // /klimatici/c?ref=hp_menu_quick-nav_418_26&type=category
    }

    visitKlimatici(){
        cy.visit('https://www.emag.bg/klimatici/c?ref=hp_menu_quick-nav_418_26&type=category');
    }
    getDropdownItem(index){
        return cy.get('div[class="gc-modal-option-wrapper"]').eq(1).find('div')
            .eq(index - 1)
            .find('button').first()
    }
    getFilterBtn(){
        return cy.get('button[class="gc-modal-footer-show-results font-bold gtm_zsertyhtnc"]');
    }
    findCardTitle(index){
        return cy.get('h2[class="card-v2-title-wrapper"]').eq(index - 1);
    }

}
export default Emag2Page;