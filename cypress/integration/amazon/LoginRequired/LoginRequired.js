import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from "../SearchItems/SearchItemsPageObject";

const searchPage = new SearchPage();

//GIVEN

Given('I navigate to result # {string} Item page', (resultNum) => {
  searchPage.actGoToResultPageAt(resultNum)  
});

Given('I add the current item to the cart', () => {
      cy.get('#add-to-cart-button').click()  
});

Given('I navigate to the Cart page from Homepage', () => {  
  cy.get('#nav-cart-text-container > .nav-line-2').click()
});

Given('I navigate to the Cart page from Confirm page', () => {  
  cy.get('#hlb-view-cart-announce').click()
});


//WHEN

When('I select Process order action from Cart page', () => {  
  cy.get('#sc-buy-box-ptc-button .a-button-input').click()()  
});

When('I select Process order action from Confirm page', () => {  
  cy.get('#hlb-ptc-btn-native').click()  
});

When('I select Buy now action', () => {
  cy.get('#buy-now-button').click()
});

When('I select Add to wish list action', () => {
  cy.get('#wishListMainButton-announce').click()
});


//THEN

Then('I should be redirected to the Signin page', () => {
  cy.url().should('contains', 'https://www.amazon.es/ap/signin');
});
