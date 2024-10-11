import CheckBoxPage from "../../page_object/task2/CheckBoxPage";

describe('checkboxes', () => {
    it('checkbox', () => {
        const checkBoxPage = new CheckBoxPage();
        checkBoxPage.baseUrl();
        checkBoxPage.checkHeader().should('contain', 'Checkboxes');
        checkBoxPage.getCheckbox1().should('be.visible');
        checkBoxPage.getCheckbox2().should('be.visible');
        checkBoxPage.getCheckbox1().should('not.be.checked');
        checkBoxPage.getCheckbox2().should('be.checked');
        checkBoxPage.checkCheckBox1();
        checkBoxPage.getCheckbox1().should('be.checked');
        checkBoxPage.clickBothCheckboxes();
        checkBoxPage.getCheckbox1().should('not.be.checked');
        checkBoxPage.getCheckbox2().should('not.be.checked');
    });

});