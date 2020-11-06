import { assert, expect } from "chai";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "./SearchItemsPageObject";

const searchPage = new SearchPage();

//WHEN

When('I sort results by price asc', () => {
    searchPage.actResultsSortByPriceAsc();
});

When('I filter results by brands {string}', (text) => {
    searchPage.actResultsFilterByBrand(text);
});


//THEN

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

   var pricePrev = searchPage.getResultPriceAt(7);
   var priceNext = 0;
    
    for (var i = 8; i <= 20; i++) {                
        priceNext = searchPage.getResultPriceAt(i);
        expect(pricePrev<=priceNext).to.equal(true);        
        pricePrev = priceNext;
    } 
       
});

Then('any result title should contain one of the texts {string}', (text) => {
    
    const arrayBrands = text.split(',');
    cy.log(arrayBrands.length)
    const regexBrands = new RegExp(`${arrayBrands.join('|')}`, 'g')
    
    for (var i = 4; i <= 10; i++) {               
        searchPage.getResultTitleAt(i).contains(regexBrands,{matchCase: false});
    }    
});

