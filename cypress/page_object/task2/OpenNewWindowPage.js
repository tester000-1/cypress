class OpenNewWindowsPage{

    baseUrl(){
        cy.visit("https://the-internet.herokuapp.com/windows");
    }
    getHeader(){
        return cy.get('h3');
    }
    clickLink(){
        cy.get('.example > a').invoke('removeAttr','target').click();
    }

}
export default OpenNewWindowsPage;