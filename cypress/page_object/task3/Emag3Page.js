class Emag3Page {

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

}
export default Emag3Page;