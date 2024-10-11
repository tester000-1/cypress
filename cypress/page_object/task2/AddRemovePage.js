class AddRemovePage{

    baseUrl(){
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
    }
    getHeader(){
        return cy.get('#content').get('h3');
    }
    getDeleteBtn(){
        return cy.get('.added-manually');
    }
    AddTenButtons(){
        cy.get('button').first().then((element) => {
            for (let index = 0; index < 10; index++) {
                cy.wrap(element).click();
            }
        });
    }
    getButtonCount(){
        return cy.get('#elements').find('.added-manually');
    }
    removeDeleteButtons(){
        for (let i = 10; i > 0; i--) {
            cy.get('#elements').find('.added-manually').then((element) => {
                cy.wrap(element.first()).click({ multiple: true });
                //Check if the element is reduced by 1
                cy.wrap(element).should('have.length', i - 1);
            });
        }
    }
    searchForDeleteBtn(){
        return cy.get('.added-manually');
    }

}
export default AddRemovePage;