import {Timeout} from "../../utils/Timeout";

class BasePage {

    constructor() {
        if (new.target === BasePage)
            throw new Error("Abstract class cannot be instantiated");
    }

    getWebPageTitle() {
        return cy.title();
    }

    rejectCookies() {
        cy.get('button:contains("Откажи всички")', {timeout: Timeout.EXTENSIVE}).click();
    }

    acceptCookies() {
        cy.get('button:contains("Приеми всички")', {timeout: Timeout.EXTENSIVE}).click();
    }

    closeMarketBanner() {
        cy.get('button[data-ntf="close"]').click();
    }

    dismissLoginModal() {
        cy.waitUntil(() => cy.get('.gdpr-cookie-banner').should('be.visible'));
        cy.get('.gdpr-cookie-banner')
            .find('button')
            .first()
            .click();
    }

    getCurrentUrl() {
        return cy.location();
    }

    getSectionTitle(sectionName) {
        return cy.get('h1:contains("' + sectionName + '")', {timeout: Timeout.EXTENSIVE});
    }

    getListingPanelHeader(sectionName) {
        return cy.get('div[class="listing-panel-heading hidden-xs"]')
            .find('h1:contains("' + sectionName + '")', {timeout: Timeout.EXTENSIVE}).first();
    }

    getDivWithText(text) {
        return cy.get(`div:contains("${text}")`);
    }

    getButtonWithText(text) {
        return cy.get(`button:contains("${text}")`);
    }

}

export default BasePage;