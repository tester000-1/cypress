export class Utils {

    makeScreenshot() {
        cy.screenshot();
    }

    sleep(time){
        cy.pause(time);
    }
}

export default Utils;