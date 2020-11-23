import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../common/page-objects/SearchPageObject";

const searchPage = new SearchPage();

//GIVEN
/*
Given('I navigate to result # {string} Item page', (resultNum) => {
    searchPage.performNavigateToResultPageAt(resultNum); 
});

Given('I search for {string}', (text) => {
    searchPage.performSearchForText(text);    
});
*/

//WHEN
When('I sort results by price asc', () => {
    searchPage.performSortResultsByPriceAsc();
});

When('I filter results by brands {string}', (text) => {
    searchPage.performFilterResultsByBrand(text);
});


//THEN
Then('I should be redirected to the Results page', () => {
    searchPage.getResultsLabel();   
});

Then('I should be redirected to the No results page', () => {
    searchPage.getNoResultsLabel();
});

Then('result header should contain {string}', (text) => {
    const arrayWords = text.split(',')
    for (var i = 0; i < arrayWords.length; i++) {
        searchPage.getResultsLabel().contains(arrayWords[i]);
    }
});

Then('any result title should contain {string}', (text) => {
    for (var i = 4; i <= 15; i++) {        
        searchPage.getResultTitleAt(i).contains(text,{matchCase: false});
    }    
});

Then('any result should have a price lower than next one', () => {
   searchPage.assertResultsOrderByPriceAsc()       
});

Then('any result title should contain one of the texts {string}', (text) => {
    searchPage.assertTitlesContainFilters(text)
});




