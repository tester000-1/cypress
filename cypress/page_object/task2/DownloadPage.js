class DownloadPage{

    basePage(){
        cy.visit("http://the-internet.herokuapp.com/download");
    }
    getLinkByText(text){
        return cy.contains(text);
    }
    downloadFile(){
        cy.downloadFile('https://the-internet.herokuapp.com/download/example.json',
            'C:\\Users\\Martin.Atanasov\\Desktop\\Workground\\cypress1\\mydownloads',
            'example.json');
    }
    downloadFileByName(fileName){
        console.log("Name: -> " + fileName);
        cy.downloadFile('https://the-internet.herokuapp.com/download/' + fileName,
            'C:\\Users\\Martin.Atanasov\\Desktop\\Workground\\cypress1\\mydownloads',
            fileName);
        this.tryToReadFile(fileName);
    }
    tryToReadFile(name){
        return cy.readFile('C:\\Users\\Martin.Atanasov\\Desktop\\Workground\\cypress1\\mydownloads\\' + name)
            .should('exist');
    }
    openFile(){
        return cy.readFile('C:\\Users\\Martin.Atanasov\\Desktop\\Workground\\cypress1\\mydownloads\\example.json');
    }
    findLinksAndDownloadFile(){
        cy.get('div[class="example"]')
            .then((listing) => {
                //console.log(Cypress.$(listing.find('a')).length);
                //console.log(this.getValidTextName(listing))
                cy.wrap(
                    listing.find('a')
                    .eq(
                        this.getRandomElement(Cypress.$(listing.find('a')).length))
                    )
                    .invoke('text')
                    .then(text => {
                        console.log('The text: ' + text);
                        expect( this.checkIfExpectedExtensionExist(text) ).to.be.true;
                        this.downloadFileByName(text);
                        this.tryToReadFile(text).should('exist');
                });
        });
    }
    checkIfExpectedExtensionExist(name){
        if (name.includes('.jpg')){
            return true;
        } else if (name.includes('.json')){
            return true;
        } else if (name.includes('.txt')){
            return true;
        } else if (name.includes('.png')){
            return true;
        }
        return false;
    }
    getValidTextName(listing){
        let bool = false;
        let num;
        let text = '';
        while(!bool){
            num = this.getRandomElement(Cypress.$(listing.find('a')).length);
            text = this.getRandomElement(Cypress.$(listing.find('a')).eq(num));
            bool = this.checkIfExpectedExtensionExist(text);
        }
        return text;
    }
    getRandomElement(range){
        console.log("range: " + range);
        const newNum = Math.floor(Math.random() * range) + 1;
        console.log("newNum: " + newNum);
        return newNum;
    }

}
export default DownloadPage;