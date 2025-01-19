class Common {

    validateURL(text) {
        cy.url().should('include', text)
    }

    validateURLEquals(url){
        cy.url().should('be.equal', url)
    }
    getHomePageLogo(){
        return cy.get('div[class="header-logo lg-2"] a')
    }
}

export default Common