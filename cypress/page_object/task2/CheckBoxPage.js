class CheckBoxPage{

    baseUrl(){
        cy.visit("https://the-internet.herokuapp.com/checkboxes");
    }
    checkHeader(){
        return cy.get('h3').first();
    }
    getCheckbox1(){
        return cy.get('form[id="checkboxes"]')
            .find('input[type="checkbox"]')
            .first();
    }
    getCheckbox2(){
        return cy.get('form[id="checkboxes"]')
            .find('input[type="checkbox"]')
            .last();
    }

    checkCheckBox1(){
        cy.get('form[id="checkboxes"]')
            .find('input[type="checkbox"]')
            .first().check();
    }

    clickBothCheckboxes(){
        //1st
        this.getCheckbox1().uncheck();
        //2nd
        this.getCheckbox2().uncheck();
    }

}
export default CheckBoxPage;