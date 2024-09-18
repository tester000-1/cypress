
class UploadPage{

    baseUrl(){
        cy.visit("http://the-internet.herokuapp.com/upload");
    }
    getFileName(){
        return cy.get('div[id="uploaded-files"]');
    }
    submit(){
        cy.get('input[id="file-submit"]').click();
    }
    uploadFile(){
        // cy.get('input[class="dz-hidden-input"]')
        //     .selectFile("cypress/page_object/UploadPage.js", {force: true, action: "drag-drop"});
        //cy.get('div[class="dz-success-mark"]').should('be.visible');

        cy.get('input[id="file-upload"]')
            .selectFile('mydownloads/example.json', {
                force: true
        });
    }

}

export default UploadPage;