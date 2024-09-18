import AddRemovePage from "../../page_object/task2/AddRemovePage";

describe('add and remove', () => {
    it('add', () => {
        //Visit the url
        const page = new AddRemovePage();
        page.baseUrl();
        //Check the header's name
        page.getHeader().then((element) => {
            expect(element.text()).equal('Add/Remove Elements');
        });
        //Check that Delete btn is not presented
        page.getDeleteBtn().should('not.exist');
        page.AddTenButtons();
        //Check Delete buttons count
        page.getButtonCount().should('have.length', 10);
        //Remove delete buttons
        page.removeDeleteButtons();
        //Check that Delete btn is not presented
        page.searchForDeleteBtn().should('not.exist');
    });

});