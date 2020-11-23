class SearchPage {

    constructor() {}
    visit() {cy.visit('https://www.amazon.es/')}

    // Page actions
    performSearchForText(text){
        //this.getSearchInput().clear().type(text).type({enter});
        cy.get('#twotabsearchtextbox').clear().type(text).type('{enter}');
    }    
    performAcceptCookies(){                
        if(cy.get('body').find('#sp-cc-accept').length >0) {
            cy.log("CA found");
            cy.get('#sp-cc-accept').click();
        }
        else {
            cy.log("CA not found");
        }        
    }
    performSortResultsByPriceAsc(){
        cy.get('#a-autoid-2-announce').click();
        cy.get('#s-result-sort-select_1').click();        
    }
    performFilterResultsByBrand(brands){
        var brandFilters = brands.split(',');
        brandFilters.forEach(checkBrand)
        function checkBrand(item, index){
            cy.contains('span', item).click()            
        }        
    }    
    performNavigateToResultPageAt(pos){        
        cy.get('.sg-col-4-of-24:nth-child('+pos+') .s-image').click()
    }
    assertResultsOrderByPriceAsc(){
        var pricePrev = this.getResultPriceAt(7);
        var priceNext = 0;
        
        for (var i = 8; i <= 20; i++) {                
            priceNext = this.getResultPriceAt(i);
            expect(pricePrev<=priceNext).to.equal(true);        
            pricePrev = priceNext;
        }
    }
    assertTitlesContainFilters(text) {
        const arrayBrands = text.split(',');        
        const regexBrands = new RegExp(`${arrayBrands.join('|')}`, 'g')
    
        for (var i = 4; i <= 10; i++) {              
            this.getResultTitleAt(i).contains(regexBrands,{matchCase: false});
        }
    }

    // UI components    
    getSearchInput(){return cy.get('#twotabsearchtextbox')}

    getResultTitleAt(pos){return cy.get('.sg-col-4-of-24:nth-child('+pos+') .a-size-mini')}

    getResultPriceAt(pos){return cy.get('.sg-col-4-of-24:nth-child('+pos+') .a-price-whole')}

    getResultsLabel(){return cy.get('.sg-col-14-of-20 > .sg-col-inner')}

    getResultsElementsCount(){return cy.find('.sg-col-4-of-24:nth-child')}

    getNoResultsLabel(){return cy.get('.a-size-medium:nth-child(1)')}

    getCookiesAcceptButton(){return cy.get('#sp-cc-accept')}

    getResultsSortSelect(){return cy.get('.a-dropdown-label')}
}
export default SearchPage;


