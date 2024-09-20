import Emag6Page from "../../page_object/task3/EmagSocialMediaPage";

describe('Emag social media links', () => {

    it('Emag social media links', () => {
        const page = new Emag6Page();
        page.baseUrl();
        page.getTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        page.rejectCookies();
        page.getSocialMediaLinkByClass('.em-instagram').click();
        cy.url().should('eq','https://www.instagram.com/emag.bg_official/');

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