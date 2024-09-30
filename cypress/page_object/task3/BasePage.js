class BasePage {

    constructor() {
        if (new.target === BasePage)
            throw new Error("Abstract class cannot be instantiated");
    }

    visitBaseUrl() {
        cy.visit(Cypress.env('BASE_URL'));
    }

    openView(path) {
        const fullPath = Cypress.env('BASE_URL') + path;
        cy.visit(fullPath);
    }

    getWebPageTitle() {
        return cy.title();
    }

    rejectCookies() {
        cy.get('button:contains("Откажи всички")', {timeout: 15000}).click();
    }

    acceptCookies(){
        cy.get('button:contains("Приеми всички")', {timeout: 15000}).click();
    }

    closeMarketBanner(){
        cy.get('button[data-ntf="close"]').click();
    }

    dismissLoginModal(){
        cy.get('button[class="js-dismiss-login-notice-btn dismiss-btn btn btn-link pad-sep-none pad-hrz-none"]')
            .click();
    }

    getCurrentUrl() {
        return cy.location();
    }

    getSectionTitle(sectionName) {
        //cy.get('div[class="listing-page-title js-head-title"]').should('be.visible');
        return cy.get('h1:contains("' + sectionName + '")', {timeout: 15000});
    }

    getListingPanelHeader(sectionName){
        return cy.get('div[class="listing-panel-heading hidden-xs"]')
            .find('h1:contains("' + sectionName + '")', {timeout: 15000}).first();
    }

    getDivWithText(text){
        return cy.get(`div:contains("${text}")`);
    }

}

export default BasePage;