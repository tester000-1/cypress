import DynamicControlsPage from "../../page_object/task2/DynamicControlsPage";

describe('dynamic controls', () => {
    it('controls', () => {
        const page = new DynamicControlsPage();
        page.basePage();
        page.getCheckbox().should('be.visible');
        page.clickRemove().should('be.visible');
        page.clickRemove().click();
        page.getMessage().should('contain', 'It\'s gone!');
        page.getCheckbox().should('not.exist');
        page.getInput().should('be.disabled');
        page.getSecondBtn().should('be.visible');
        page.getSecondBtn().click();
        page.getSecondMessage().should('contain', 'It\'s enabled!');
        page.getInput().should('be.enabled');
    });

});