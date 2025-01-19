class HomePage{

    getHomePageImage(){
        return cy.get("img[alt='HSBC India Bank']");
    }
    getLogOnbtn(){
        return cy.get("li[class='header-user-wrapper'] a:nth-child(1)");
    }
    getPageTitle(){
        return cy.get("h2[class='pull-left heading t28l'] span");
    }
    getSubmitBtn(){
        return cy.get("#username_submit_btn");
    }
    getUsernameField(){
        return cy.get("#username");
    }
    getRememberMeCheckbox(){
       return cy.get("#rememberMe");
    }
    getHelpIcon(){
       return cy.get(".icon.icon-circle-help-solid.help-icon");
    }
    getHelpContent(){
        return cy.get("#help_content_1");
    }
    getHelpTitle(){
        return cy.get("h3[class='t25l'] span");
    }
    getHelpCloseIcon(){
      return cy.get("span[class='icon icon-delete']");
    }

    getNavigationSection(){
        return cy.get("nav[aria-label='Main Footer Navigation']");
    }
    getFindYourNearestBranchLink(){
        return cy.get('nav > .footer-large > :nth-child(2) > a');
    }

    getPrivacyPolicyLink(){
        return cy.get("div[class='footer-bottom'] li:nth-child(3) a:nth-child(1)");
    }

    getPrivacyTitle(){
        return cy.get(".A-TYP48T-RW-ALL.text-container.text");
    }

    getBankingMenu(){
        return cy.get("ul[class='row'] div[class='header-mobile-doormat-0 header-doormat-mobile-title sidebar-submenu-trigger'] span[class='header-main-navigation-title']");    
    }

    getCreditLink(){
        return cy.get("a[href$='https://www.hsbc.co.in/credit-cards/']").eq(1)
    }

}

export default HomePage