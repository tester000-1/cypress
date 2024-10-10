import UploadPage from "../../page_object/task2/UploadPage";

describe('file upload', () => {
    it('upload', () => {
        const page = new UploadPage();
        page.baseUrl();
        page.uploadFile();

        //cy.get('form').submit();
        page.submit();
        page.getFileName().should('contain', 'example.json');

    });

});