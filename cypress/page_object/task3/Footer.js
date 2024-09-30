class Footer {

    getSocialMediaLinkByClass(iconClass) {
        cy.scrollTo('bottom');
        cy.get('div[class="footer-copy footer-inverse"]')
            .find(iconClass).parent().should('have.attr', 'target');
        return cy.get('div[class="footer-copy footer-inverse"]')
            .find(iconClass)
            .parent()
            .invoke('removeAttr', 'target');
    }

    getFBHeader() {
        return cy.get('h1[class="html-h1"]');
    }

    getYoutubeHeader() {
        return cy.get('h1[class="dynamic-text-view-model-wiz__h1"]').first();
    }

}

export default Footer;