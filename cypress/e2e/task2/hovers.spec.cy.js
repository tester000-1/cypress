import HoverPage from "../../page_object/task2/HoverPage";

import "cypress-real-events";

describe('hovers', () => {
    it('hover', () => {
        const hoverPage = new HoverPage();
        hoverPage.baseUrl();
        hoverPage.getHeader().should('contain', 'Hovers');
        hoverPage.getP().should('contain', 'Hover over the image for additional information');
        hoverPage.getImageHeader(1).should('be.visible').and('contain.text', 'user1');
        //hoverPage.getImageLink(1).should( 'be.visible').and('contain', 'View Profile');
    });

});