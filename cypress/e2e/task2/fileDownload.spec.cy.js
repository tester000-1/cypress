import DownloadPage from "../../page_object/task2/DownloadPage";

describe('file download', () => {
    it('download', () => {
        const page = new DownloadPage();
        page.basePage();
        page.findLinksAndDownloadFile();

        //page.getLinkByText('example.json').should('be.visible');
        //page.downloadFile();
        //const ourText = 'Using fixtures to represent data';
        //page.openFile().its('name').should('eq', ourText);
    });

});