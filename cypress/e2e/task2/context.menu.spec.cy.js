import ContextMenuPage from "../../page_object/task2/ContextMenuPage";

describe('context menu', () => {
    it('menu', () => {
        const page = new ContextMenuPage();
        page.basePage();

        cy.get('#hot-spot').trigger('contextmenu')

        //cy.get('#hot-spot').realClick({button: "right", position: "center"})

        //Right click is not supported

    });

});