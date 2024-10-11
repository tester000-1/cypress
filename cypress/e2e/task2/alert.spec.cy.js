import AlertPage from "../../page_object/task2/AlertPage";

describe('alert js', () => {
    it('alert', () => {
        const page = new AlertPage();
        page.baseUrl();
        page.verifyHeader().should('contain', 'JavaScript Alerts');
        page.verifyAlert().should('be.visible');
        page.verifyConfirm().should('be.visible');
        page.verifyPrompt().should('be.visible');
        page.clickAlert();
        page.getResultTextAlert().should('contain.text', "You successfully clicked an alert");
        //Test with positive button OK
        page.clickConfirm();
        page.getResultTextConfirm().should('be.visible');
        //Test with negative button cancel
        // page.clickConfirmNegative();
        // page.getResultTextConfirmNegativeText().should('be.visible');
        page.clickPrompt();
        page.getResultTextPrompt().should('be.visible');
    });
});