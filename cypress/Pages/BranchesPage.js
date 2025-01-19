class BranchesPage {

    getPageTitle(){
        return cy.get(".A-TYP38L-RW-ALL.text-container.text");
    }

    getBranchFinderButton(){
        return cy.get("#content_main_button_1");
    }
}

export default BranchesPage