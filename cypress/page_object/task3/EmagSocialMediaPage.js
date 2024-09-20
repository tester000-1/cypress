class EmagSocialMediaPage {

    baseUrl(){
        cy.visit(Cypress.env('BASE_URL'))
    }

    getTitle(){
        return cy.title();
    }

    getSocialMediaLinkByClass(iconClass){
        cy.scrollTo('bottom');
        cy.get('div[class="footer-copy footer-inverse"]')
            .find(iconClass).parent().should('have.attr','target');
        return cy.get('div[class="footer-copy footer-inverse"]')
            .find(iconClass)
            .parent()
            .invoke('removeAttr','target');
    }

    rejectCookies(){
        return cy.get('button[class="btn btn-primary btn-block js-refuse gtm_uurvzwwerz"]').click();
    }

    getCurrentUrl(){
        return cy.location();
    }

    getFBHeader(){
        return cy.get('h1[class="html-h1"]');
    }
    
    getYoutubeHeader(){
        return cy.get('h1[class="dynamic-text-view-model-wiz__h1"]').first();
    }

}
export default EmagSocialMediaPage;