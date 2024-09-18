class AlertPage{

    baseUrl(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    }
    verifyHeader(){
        return cy.get('h3').first()
    }
    verifyAlert(){
        return cy.get('button').first().contains("Click for JS Alert");
    }
    verifyConfirm(){
        return cy.get('button').eq(1).contains("Click for JS Confirm");
    }
    verifyPrompt(){
        return cy.get('button').eq(2).contains("Click for JS Prompt");
    }
    clickAlert(){
        cy.get('button').first().click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        });
    }
    getResultTextAlert(){
        return cy.get('p[id="result"]');
    }
    clickConfirm(){
        cy.get('button').eq(1).click();
        cy.on('window:confirm',(t)=>{
            //assertions
            expect(t).to.contains('I am a JS Confirm');
            return true;
        });
    }
    getResultTextConfirm(){
        return cy.get('p[id="result"]').contains('You clicked: Ok');
    }
    clickConfirmNegative(){
        cy.get('button').eq(1).click();
        cy.on('window:confirm',(t)=>{
            //assertions
            expect(t).to.contains('I am a JS Confirm');
            return false;
        });
    }
    getResultTextConfirmNegativeText(){
        return cy.get('p[id="result"]').contains('You clicked: Cancel');
    }
    clickPrompt(){
        //handling prompt alert
        cy.window().then(function(p){
            // click on Click for JS Prompt button
            cy.get('button').eq(2).click();
            //assertions
            //expect(wrap(p)).to.contains('I am a JS prompt');

            //stubbing prompt window
            cy.stub(p, "prompt").returns("Hello from test");
        });
    }
    getResultTextPrompt(){
        // verify application message on clicking on OK
        return  cy.get('#result').contains('You entered: Hello from test');
    }

}
export default AlertPage;