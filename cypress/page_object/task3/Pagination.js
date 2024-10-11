class Pagination {

    clickPaginationNumber(number) {
        cy.get('#listing-paginator').find(`a:contains("${number}")`).should('be.visible');
        cy.get('#listing-paginator').find(`a:contains("${number}")`).click();
    }

}

export default Pagination;