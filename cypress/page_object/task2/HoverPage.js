import "cypress-real-events";

class HoverPage{

    baseUrl(){
        cy.visit("https://the-internet.herokuapp.com/hovers");
    }
    getHeader(){
        return cy.get('h3').first();
    }
    getP(){
        return cy.get('p').first();
    }
    getImageHeader(number){
        cy.get('div[class="figure"]').eq(number - 1).realHover({position: "center"});
        cy.get('div[class="figcaption"]').eq(0).should('be.visible');
        cy.get('div[class="figcaption"]').eq(1).should('be.visible');

        // cy.get('#content > div > div:nth-child(3) > div > a')

        //     .should('have.attr', 'href').and('be.visible');

        //cy.get('a[href*="View Profile"]').should('be.visible');

        return cy.get('h5');
    }
    getImageLink(number){
        cy.get('div[class="figure"]').eq(number - 1).realHover({position: "center"});
        return cy.get('div[class="figcaption"]').eq(number);
    }

}
export default HoverPage;