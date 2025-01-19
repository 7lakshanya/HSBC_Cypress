import HomePage from "../Pages/HomePage";
import BranchFinderPage from "../Pages/branchFinderPage";
import BranchesPage from "../Pages/BranchesPage";
import testData from "../fixtures/data.json";
import Common from "../Pages/Common";

const homePage = new HomePage()
const branchFinderPage = new BranchFinderPage()
const common = new Common()
const branchesPage = new BranchesPage()

before(() => {
    cy.visit('https://www.hsbc.co.in/')
  })

describe('ATMSearch', () => {
    it('ATMSearch', () => {
        homePage.getNavigationSection().scrollIntoView()
        homePage.getFindYourNearestBranchLink().click()

        common.validateURL('/ways-to-bank/branches/')
        branchesPage.getPageTitle().contains(testData.branchesPageTitle)
        branchesPage.getBranchFinderButton().click({force : true})

        common.validateURL("/branch-finder/")    
        branchFinderPage.getPostcodeOrTownInput().should('be.visible')
        branchFinderPage.getGoogleMapPlugin().should('be.visible')  
        branchFinderPage.getPostcodeOrTownInput().should('not.be.disabled')  
        branchFinderPage.getPostcodeOrTownInput().type(testData.postcodeOrTownInput, {force: true, delay : 1000})
        branchFinderPage.getPostcodeOrTownInput().type('{downArrow}{enter}')
        branchFinderPage.getSearchResult().should('be.visible').contains(testData.branchLocation)
        branchFinderPage.getShowMoreResultsButton().should('be.visible')
        branchFinderPage.getShowMoreResultsButton().click()
        branchFinderPage.getShowMoreResultsListItems().should('be.visible')
        branchFinderPage.getSecondATMBranchTooltip().should('be.visible')
        branchFinderPage.getSecondATMBranchTooltip().contains('2')
        branchFinderPage.getSecondATMBranchTooltip().should('have.css', 'background-color', testData.redColorHex)
        cy.scrollTo('bottom')

        branchFinderPage.getInstagramLink().should('be.visible')
        branchFinderPage.getFacebookLink().should('be.visible')
        branchFinderPage.getTwitterLink().should('be.visible')
        branchFinderPage.getYoutubeLink().should('be.visible')
        cy.wait(3000);
        
        cy.scrollTo('top')
        common.getHomePageLogo().click()
        common.validateURLEquals(testData.homePageURL)
        cy.scrollTo('bottom')

        homePage.getPrivacyPolicyLink().should('be.visible')
        homePage.getPrivacyPolicyLink().click()
        common.validateURL('/privacy-statement/')
        homePage.getPrivacyTitle().contains(testData.PrivacyHeader)

    })
  })