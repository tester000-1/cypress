import Emag6Page from "../../page_object/task3/Emag6Page";

describe('Emag products', () => {

    it('products', () => {
        const page = new Emag6Page();
        page.basePage();
        page.getTitle().should('eq', 'eMAG.bg - Широка гама продукти');

        page.rejectCookies();
        // Class selector '.em-facebook' , '.em-youtube' , '.em-instagram'
        //page.getSocialMediaLinkByClass('.em-facebook').click();
        // page.getCurrentUrl().should( (loc) => {
        //     //expect(loc.href).to.eq('https://www.facebook.com/eMAGbg');
        //     expect(loc.pathname).to.eq('/eMAGbg');
        // });
        //page.getFBHeader().should('contain','eMAG Bulgaria');
        //Cypress does not support multiple tabs!

        //page.getSocialMediaLinkByClass('.em-youtube').click();
        page.getSocialMediaLinkByClass('.em-instagram').click();
        cy.url().should('eq','https://www.instagram.com/emag.bg_official/');

    });

    // after(() => {
    //     cy.clearAllCookies();
    // });

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