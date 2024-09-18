import Emag2Page from "../../page_object/task3/Emag2Page";

describe('Emag products', () => {
    it('products', () => {
        const page = new Emag2Page();
        page.basePage();
        page.getTitle().should('eq', 'eMAG.bg - Широка гама продукти');
        //cy.get('a[href*="Мобилни телефони"]').should('be.visible')
        // cy.get('[data-id="1"] > .js-megamenu-list-department-link')
        //     .find('span[class="megamenu-list-department__department-name"]')
        //     .first()
        //     .should('contain', 'Мобилни телефони')
        page.findMenuItem('Големи електроуреди', 5);
        //page.findSubMenuItem('Големи електроуреди', 5);
        page.findAirConditioners('Големи електроуреди', 5);

        //Skipped step

        page.visitKlimatici();
        cy.get('button[data-id="6416"]').click();
        page.getDropdownItem(1).should('contain', 'Daikin');
        page.getDropdownItem(1).click();
        page.getFilterBtn().should('contain', 'виж още').and('contain', 'резултата');
        page.getFilterBtn().click();
        //let normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()
        page.findCardTitle(1).should(/daikin/i);
        //     .should(($h2) => {
        //         const toLowerCaseCustomized = (str) => {
        //             // init an empty string
        //             let result = '';
        //             // Looping each char in the string
        //             for (let char of str) {
        //                 // If the char ASCII code value is between 65 to 90, we add 32 to it
        //                 if (char.charCodeAt() <= 90 && char.charCodeAt() >= 65) {
        //                     result += String.fromCharCode(char.charCodeAt() + 32);
        //                 } else {
        //                     // we keep the origin value
        //                     result += char;
        //                 }
        //             }
        //             // return the new string
        //             return result;
        //         };
        //
        //
        //     let text = $h2.text();
        //     let expectedText = 'daikin';
        //     expect(toLowerCaseCustomized(text)).to.match(toLowerCaseCustomized(expectedText));
        // })


        //.should('daikin', {matchCase: false})


    });

});

/*
Test Case 2
Step: Open eMAG.bg
Expected result: The browser tab title is “eMAG.bg - Широка гама продукти”
Step: Navigate to “Големи електроуреди – Климатици”
Expected result: The browser tab contains the string “Климатици” and the section title on the page is “Климатици”
Step: Under the section “Производител” click “виж повече”. Type Daikin in the search field. Check the Daikin checkbox. Click the “Филтрирай” button.
Expected result: Verify that each search result on the first 2 pages contains the word “Daikin” in its title.
Step: Sort the results by price in descending order from high to low.
Expected result: The price of products in the results (from top to bottom) should be equal to or higher than the price of the following product.

 */