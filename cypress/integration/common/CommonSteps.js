import { assert, expect } from "chai";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../common/page-objects/SearchPageObject";
import CartPage from "../common/page-objects/CartPageObject";
import SigninPage from "../common/page-objects/SigninPageObject";

const searchPage = new SearchPage();
const cartPage = new CartPage();
const signinPage = new SigninPage();


//GIVEN
Given('I navigate to HomePage', () => {
    searchPage.visit()
});

Given('I navigate to the Cart page', () => { 
    cartPage.visit()   
  });

Given('I accept cookies policies', () => {
    searchPage.performAcceptCookies();
});

Given('I search for {string}', (text) => {
  searchPage.performSearchForText(text);    
});

Given('I navigate to result # {string} Item page', (resultNum) => {
  searchPage.performNavigateToResultPageAt(resultNum)  
});

//THEN
Then('I should be redirected to the Signin page', () => {
  signinPage.assertSigninURL()    
});
