class CreditCard{

    getHeader() {
        return cy.get('.A-TYPS1L-RW-DEV.m-xsm-12.m-mdsm-10.m-md-8')
    }

    getRightCardLink(){
        return cy.get(".A-LNKC16R-RW-ALL.A-TYPS2L-RW-DEV[href='/credit-cards/compare/']")
    }

    getAllCards(){
        return cy.get(".product-select.add-product")
    }

    getPopupTitle(){
        return cy.get("#title-pp_tools_productComparator_4")
    }

    getPopupCloseIcon(){
        return cy.get(".close-button")
    }

    getAddACardLink(){
        return cy.get("div[class='product-select-container'] div:nth-child(1) a:nth-child(1)")
    }
    getAddACardLink2(){
        return cy.get("div[class='product-select-container'] div:nth-child(3) a:nth-child(1) span:nth-child(1)")
    }
    getAddACardLink3(){
        return cy.get("div[class='product-select-container released'] div:nth-child(1) a:nth-child(1)")
    }
    

    getCard1Title(){
        return cy.get("#label-pp_tools_productComparator_6")
    }

    getCard2Title(){
        return cy.get("#label-pp_tools_productComparator_8")
    }

    getCard3Title(){
        return cy.get("#label-pp_tools_productComparator_10")
    }

    getAllCheckboxes(){
        return cy.get("div[role='checkbox']")
    }

    getCompareBtn(){
        return cy.get(".A-BTNP-RW-ALL")
    }

    getCard1(){
        return cy.get("#pp_tools_productComparator_2-title")
    }

    getCard2(){
        return cy.get("#pp_tools_productComparator_3-title")
    }
    getCard3(){
        return cy.get("#pp_tools_productComparator_4-title")
    }

    getAllRemoveLinks(){
        return cy.get(".A-TYPS7R-RW-DEV.link-icon.clear-icon")
    }

    getWhatsNextSection(){
        return cy.get("#pp_tools_productComparatorUnitCTA_1")
    }

    getCard1ApplyNowBtn(){
        return cy.get(".A-BTNPINSEC-RW-ALL.A-TYPS5R-RW-DEV[href='https://www.accountopening.hsbc.co.in/credit-cards/#!/app/apply-for-credit-card?form.campaign_id=INM_PWS_CCCP_EXPBSVC&form.source=INM_PWS_OPT&WT.ac=INM_PWS_CCCP_OPTEXPBSVC&card=vpc']")
    }

    getCard3ApplyNowBtn(){
        return cy.get(".A-BTNPINSEC-RW-ALL.A-TYPS5R-RW-DEV[href='https://www.accountopening.hsbc.co.in/credit-cards/#!/app/apply-for-credit-card?form.campaign_id=INM_PWS_CCCP_EXPBSVC&form.source=INM_PWS_OPT&WT.ac=INM_PWS_CCCP_OPTEXPBSVC&card=cbc']")
    }

    getCard1FindOutBtn(){
        return cy.get(".A-BTNPINTET-RW-ALL.A-TYPS5R-RW-DEV[href='/content/hsbc/in/en_in/credit-cards/products/visa-platinum']")
    }

    getCard2FindOutBtn(){
        return cy.get(".A-BTNPINSEC-RW-ALL.A-TYPS5R-RW-DEV[href='/content/hsbc/in/en_in/credit-cards/products/premier-mastercard']")
    }

    getCard3FindOutBtn(){
        return cy.get(".A-BTNPINTET-RW-ALL.A-TYPS5R-RW-DEV[href='/content/hsbc/in/en_in/credit-cards/products/live-plus']")
    }
}

export default CreditCard