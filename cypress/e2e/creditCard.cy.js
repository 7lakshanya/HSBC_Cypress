import HomePage from "../Pages/HomePage"
import Common from "../Pages/Common"
import CreditCard from "../Pages/CreditCard"
import testData from "../fixtures/data.json"

const commonPage = new Common()
const homePage = new HomePage()
const creditCard = new CreditCard()

before(() => {
   cy.visit('https://www.hsbc.co.in/')
})

describe('HSBC Credit Card Test Scenario', () => {
  it('Credit Card Test', () => {
    Cypress.on('uncaught:exception', () => { return false })
    homePage.getBankingMenu().should('be.visible')
    homePage.getBankingMenu().click()
    homePage.getCreditLink().click({force: true})
    commonPage.validateURL("/credit-cards/")

    creditCard.getHeader().should('be.visible')
    creditCard.getHeader().contains(testData.CreditHeader)

    creditCard.getRightCardLink().should('be.visible')
    creditCard.getRightCardLink().click()

    commonPage.validateURL("/compare/")

    if(creditCard.getPopupTitle().should('be.visible')){
      creditCard.getPopupCloseIcon().click()
    }

    creditCard.getPopupTitle().should('not.be.visible')
    creditCard.getAllCards().should("have.length", 4)

    creditCard.getAddACardLink().should('be.visible')
    creditCard.getAddACardLink().click({force: true})

    creditCard.getPopupTitle().should('be.visible')
    creditCard.getPopupCloseIcon().click()
    creditCard.getPopupTitle().should('not.be.visible')
    
    creditCard.getAddACardLink().click({force: true})

    creditCard.getPopupTitle().should('be.visible')
    creditCard.getPopupTitle().contains(testData.CardPopUpTitle)
    creditCard.getCard1Title().contains(testData.Card1Title)
    creditCard.getCard2Title().contains(testData.Card2Title)
    creditCard.getCard3Title().contains(testData.Card3Title)

    creditCard.getAllCheckboxes().should("have.length", 3)
    creditCard.getAllCheckboxes().eq(0).click()
    creditCard.getAllCheckboxes().eq(1).click()

    creditCard.getCompareBtn().should('be.visible')
    creditCard.getCompareBtn().click()
    creditCard.getPopupTitle().should('not.be.visible')

    creditCard.getCard1().should('be.visible')
    creditCard.getCard1().contains(testData.Card1Title)
    creditCard.getCard2().should('be.visible')
    creditCard.getCard2().contains(testData.Card2Title)

    creditCard.getWhatsNextSection().scrollIntoView()
    cy.wait(5000)
    creditCard.getCard1ApplyNowBtn().should('be.visible')
    creditCard.getCard1FindOutBtn().should('be.visible')
    creditCard.getCard2FindOutBtn().should('be.visible')

    cy.scrollTo('top')
    cy.wait(5000)
    creditCard.getAllRemoveLinks().should("have.length", 2)

    creditCard.getAddACardLink2().click({force: true})
    creditCard.getPopupTitle().should('be.visible')

    creditCard.getAllCheckboxes().should("have.length", 3)
    creditCard.getAllCheckboxes().eq(2).click()

    creditCard.getCompareBtn().should('be.visible')
    creditCard.getCompareBtn().click()
    creditCard.getPopupTitle().should('not.be.visible')

    creditCard.getCard1().should('be.visible')
    creditCard.getCard2().should('be.visible')
    creditCard.getCard3().should('be.visible')
    creditCard.getAllRemoveLinks().should("have.length", 3)

    creditCard.getAllRemoveLinks().eq(0).click()
    creditCard.getAllRemoveLinks().should("have.length", 2)
    creditCard.getCard1().should('be.visible')
    creditCard.getCard2().should('be.visible')
    
  })
})