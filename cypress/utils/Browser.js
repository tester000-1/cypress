export class Browser {

    visitBaseUrl() {
        cy.visit(Cypress.env('BASE_URL'));
    }

    openPageView(path) {
        const fullPath = Cypress.env('BASE_URL') + path;
        cy.visit(fullPath);
    }

}
export default Browser;