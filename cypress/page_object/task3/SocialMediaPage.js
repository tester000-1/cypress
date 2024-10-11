const BasePage = require('./BasePage');

class SocialMediaPage extends BasePage {

    rejectSocialMediaCookiesAndGetTheUrlFromFacebook() {
        cy.get('div[aria-label="Allow all cookies"]', {timeout: 12000})
            .eq(0)
            .should('not.be.visible');
        cy.get('div[aria-label="Decline optional cookies"]')
            .eq(0)
            .click({force: true, multiple: true});
        return cy.url();
    }

    rejectSocialMediaCookiesAndGetTheUrlFromInstagram() {
        cy.get('div[role="dialog"]', {timeout: 12000})
            .eq(0)
            .should('be.visible');
        cy.get('button:contains("Decline optional cookies")')
            .eq(0)
            .click({force: true, multiple: true});
        return cy.url();
    }

    rejectSocialMediaCookiesFromYoutube() {
        cy.get('h1', {timeout: 12000})
            .eq(0)
            .should('be.visible');
        cy.get('button[aria-label="Reject all"]')
            .eq(0)
            .click({force: true, multiple: true});
    }

}

export default SocialMediaPage;