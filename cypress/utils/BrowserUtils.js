export class BrowserUtils {

    makeScreenshot() {
        cy.screenshot();
    }

    sleep(time){
        cy.pause(time);
    }
}

export default BrowserUtils;