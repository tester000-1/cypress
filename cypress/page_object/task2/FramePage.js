class FramePage{

    basePage(){
        cy.visit("http://the-internet.herokuapp.com/frames");
    }

    navigateToFrame(){
        cy.get('a').contains('iFrame').click();
    }
    getFrameText(){
        //cy.get('iframe[id="mce_0_ifr"]').its('0.contentDocument');
        const getIframeWindow = () => {
            return cy
                .get('iframe[id="mce_0_ifr"]')
                .its('0.contentWindow').should('exist')
        }
        const getIframeBody = () => {
            // get the iframe > document > body
            // and retry until the body element is not empty
            return cy
                .get('iframe[id="mce_0_ifr"]')
                .its('0.contentDocument.body').should('not.be.empty')
                // wraps "body" DOM element to allow
                // chaining more Cypress commands, like ".find(...)"
                // https://on.cypress.io/wrap
                .then(cy.wrap)
        }
        getIframeWindow();
        return getIframeBody().find('p');
    }

}
export default FramePage;