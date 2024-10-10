import SocialMediaPage from "../../page_object/task3/SocialMediaPage";
import Footer from "../../page_object/task3/Footer";

// before(() => {
//     // makes custom commands available to all subsequent cy.origin('cypress.io)
//     // calls in this spec. put it in your support file to make them available to
//     // all specs
//     cy.origin('google.com', () => {
//         Cypress.require('../support/commands')
//     })
// })

describe('Emag social media links', () => {

    it('Emag social media links', () => {
        const page = new SocialMediaPage();
        const footer = new Footer();
        page.visitBaseUrl();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');

        page.rejectCookies();
        // Class selector '.em-facebook' , '.em-youtube' , '.em-instagram'
        footer.getSocialMediaLinkByClass('.em-facebook').click();

        cy.origin('https://www.facebook.com/', () => {
            page.rejectSocialMediaCookiesAndGetTheUrl();

            // cy.get('div[aria-label="Allow all cookies"]', {timeout: 8000}).eq(0).should('not.be.visible');
            // cy.get('div[aria-label="Decline optional cookies"]').eq(0)
            //     .click({force: true, multiple: true});
            cy.url().should('eq', 'https://www.facebook.com/eMAGbg');
        });

        page.visitBaseUrl();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        footer.getSocialMediaLinkByClass('.em-instagram').click();

        cy.origin('https://www.instagram.com/', () => {
            cy.get('div[role="dialog"]', {timeout: 8000}).eq(0).should('be.visible');
            cy.get('button:contains("Decline optional cookies")').eq(0)
                .click({force: true, multiple: true});
            cy.url().should('eq', 'https://www.instagram.com/emag.bg_official/');
        });

        page.visitBaseUrl();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        footer.getSocialMediaLinkByClass('.em-youtube').click();

        cy.origin('https://consent.youtube.com', () => {
            cy.get('h1', {timeout: 8000}).eq(0).should('be.visible');
            cy.get('button[aria-label="Reject all"]').eq(0)
                .click({force: true, multiple: true});
        });

        cy.origin('https://www.youtube.com/', () => {
            cy.url().should('eq', 'https://www.youtube.com/channel/UC5y5r9BY5IiT4MkBrMtZRnA');
        });

    });

});

/*
Test Case 6
Step: Open eMAG.bg
Expected result: The browser tab title is “eMAG.bg - Широка гама продукти”
Step: Click the Facebook icon
Expected result: The correct link
eMAG Bulgaria | Sofia
is opened in a new tab.
Step: Close the Facebook tab
Expected result: The number of opened tabs is 1.
Step: Click the Youtube icon
Expected result: The correct link
eMAG Bulgaria
is opened in a new tab.
Step: Close the Youtube tab
Expected result: The number of opened tabs is 1.
Step: Click the Instagram icon
Expected result: The correct link
Instagram (@emag.bg_official)
is opened in a new tab.
Step: Close the Instagram tab
Expected result: The number of opened tabs is 1.
 */