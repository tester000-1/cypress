import SocialMediaPage from "../../page_object/task3/SocialMediaPage";
import Footer from "../../page_object/task3/Footer";
import Browser from "../../utils/Browser";

describe('Emag social media links', () => {

    it('Emag social media links', () => {
        const page = new SocialMediaPage();
        const footer = new Footer();
        const browser = new Browser();
        browser.visitBaseUrl();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        page.rejectCookies();
        // Class selector '.em-facebook' , '.em-youtube' , '.em-instagram'
        footer.getSocialMediaLinkByClass('.em-facebook').click();
        cy.origin('https://www.facebook.com/', () => {
            const OriginMediaPage = Cypress.require("../../page_object/task3/SocialMediaPage.js");
            const thisPage = new OriginMediaPage();
            thisPage.rejectSocialMediaCookiesAndGetTheUrlFromFacebook().should('eq', 'https://www.facebook.com/eMAGbg');
        });
        browser.visitBaseUrl();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        footer.getSocialMediaLinkByClass('.em-instagram').click();
        cy.origin('https://www.instagram.com/', () => {
            const OriginMediaPage = Cypress.require("../../page_object/task3/SocialMediaPage.js");
            const thisPage = new OriginMediaPage();
            thisPage.rejectSocialMediaCookiesAndGetTheUrlFromInstagram().should('eq', 'https://www.instagram.com/emag.bg_official/');
        });
        browser.visitBaseUrl();
        page.getWebPageTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        footer.getSocialMediaLinkByClass('.em-youtube').click();
        cy.origin('https://consent.youtube.com', () => {
            const OriginMediaPage = Cypress.require("../../page_object/task3/SocialMediaPage.js");
            const thisPage = new OriginMediaPage();
            thisPage.rejectSocialMediaCookiesFromYoutube();
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