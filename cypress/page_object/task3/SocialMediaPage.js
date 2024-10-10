const BasePage = require('./BasePage');

class SocialMediaPage extends BasePage {

    rejectSocialMediaCookiesAndGetTheUrl(){
        cy.get('div[aria-label="Allow all cookies"]', {timeout:12000})
            .eq(0)
            .should('not.be.visible');
        cy.get('div[aria-label="Decline optional cookies"]')
            .eq(0)
            .click({force:true, multiple:true});
    }

}

export default SocialMediaPage;