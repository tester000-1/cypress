class Footer {

    // iconClass: '.em-facebook' , '.em-youtube' , '.em-instagram'
    getSocialMediaLinkByClass(iconClass) {
        cy.scrollTo('bottom');
        cy.get('div[class="footer-copy footer-inverse"]')
            .find(iconClass).parent().should('have.attr', 'target');
        return cy.get('div[class="footer-copy footer-inverse"]')
            .find(iconClass)
            .parent()
            .invoke('removeAttr', 'target');
    }

}

export default Footer;