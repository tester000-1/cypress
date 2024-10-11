import OpenNewWindowPage from "../../page_object/task2/OpenNewWindowPage";

describe('open new window', () => {
    it('new window', () => {
        const page = new OpenNewWindowPage();
        page.baseUrl();
        page.getHeader().should('contain', 'Opening a new window');
        page.clickLink();
        page.getHeader().should('contain', 'New Window');
    });

});