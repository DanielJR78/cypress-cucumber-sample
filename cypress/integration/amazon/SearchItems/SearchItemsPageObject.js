class SearchPage {

    constructor() {
    }

    visit() {
        cy.visit('https://www.amazon.es/');
    }

    // UI components

    getSearchInput() {
        return cy.get('#twotabsearchtextbox');
    }

    getResultTitleAt(pos){
        return cy.get('.sg-col-4-of-24:nth-child('+pos+') .a-size-mini');
    }

    getResultPriceAt(pos){
        return cy.get('.sg-col-4-of-24:nth-child('+pos+') .a-price-whole');        
    }

    getResultsLabel(){
        return cy.get('.sg-col-14-of-20 > .sg-col-inner');
    }

    getResultsElementsCount(){
        return cy.find('.sg-col-4-of-24:nth-child')
    }

    getNoResultsLabel(){
        return cy.get('.a-size-medium:nth-child(1)');
    }

    getCookiesAcceptButton(){
        return cy.get('#sp-cc-accept');
    }

    getResultsSortSelect(){
        return cy.get('.a-dropdown-label');
    }

    getResultsFiltersChecked(){
        //TODO return cy.get('');
    }


    // UI actions

    actSearchForText(text){
        //this.getSearchInput().clear().type(text).type({enter});
        cy.get('#twotabsearchtextbox').clear().type(text).type('{enter}');
    }
    
    actCookiesAccept(){        
        if(cy.get('body').find('.sp-cc-buttons').length >0) {
            cy.get('#sp-cc-accept').click();
        }        
    }

    actResultsSortByPriceAsc(){
        cy.get('#a-autoid-2-announce').click();
        cy.get('#s-result-sort-select_1').click();        
    }

    actResultsFilterByBrand(brands){
        var brandFilters = brands.split(',');
        brandFilters.forEach(checkBrand)
        function checkBrand(item, index){
            cy.contains('span', item).click()            
        }        
    }
    
    actGoToResultPageAt(pos){
        //this.getResultsLabel()
        cy.get('.sg-col-4-of-24:nth-child('+pos+') .s-image').click()
    }
}

export default SearchPage;


