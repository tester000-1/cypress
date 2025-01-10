class DynamicControlsPage{

    basePage(){
        cy.visit("http://the-internet.herokuapp.com/dynamic_controls");
    }
    getCheckbox(){
        //return cy.get('#checkbox-example').find('input[type="checkbox"]').first();
        return cy.get('input[type="checkbox"]');
    }
    clickRemove(){
        return cy.get('#checkbox-example').find('button').first();
    }
    getMessage(){
        return cy.get('#message');
    }
    getInput(){
        return cy.get('input[type="text"]');
    }
    getSecondBtn(){
        return cy.get('#input-example').find('button').first();
    }
    getSecondMessage(){
        return cy.get('#message');
    }



}
export default DynamicControlsPage;