import { assert, expect } from "chai";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../amazon/SearchItems/SearchItemsPageObject";


//GIVEN

const searchPage = new SearchPage();

Given('I navigate to HomePage', () => {
    searchPage.visit();
});

Given('I accept cookies policies', () => {
    searchPage.actCookiesAccept();
});


//WHEN

When('I search for {string}', (text) => {
    searchPage.actSearchForText(text);    
});


//THEN

Then('I should be redirected to the Results page', () => {
    searchPage.getResultsLabel();
    searchPage.getResultTitleAt(4);
});

Then('I should be redirected to the No results page', () => {
    searchPage.getNoResultsLabel();
});

