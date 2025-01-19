import HomePage from "../Pages/HomePage";
import testData from "../fixtures/data.json";
import Common from "../Pages/Common";

const homePage = new HomePage()
const common = new Common()

before(() => {
    cy.visit('https://www.hsbc.co.in/')
  })

describe('HSBCLogIn', () => {
    
    it('HSBCLogIn', () => {
      homePage.getHomePageImage().should('exist')
      homePage.getLogOnbtn().click()
      homePage.getPageTitle().contains(testData.homePageTitle)
      homePage.getSubmitBtn().should('exist').should('be.disabled')
      homePage.getUsernameField().type(testData.email)
      homePage.getSubmitBtn().should('not.be.disabled')

      homePage.getRememberMeCheckbox().should('not.be.checked')
      homePage.getHelpIcon().click()
      homePage.getHelpContent().should('be.visible')
      homePage.getHelpTitle().should('be.visible')
      homePage.getHelpCloseIcon().should('be.visible')
      homePage.getHelpCloseIcon().click()
      homePage.getHelpContent().should('not.be.visible')
      
    })
  })