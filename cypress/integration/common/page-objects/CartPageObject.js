class CartPage {

    constructor() {}
    visit() {cy.visit('https://www.amazon.es/gp/cart/view.html')}

    // Page actions
    performProcessOrder(){        
        cy.get('#sc-buy-box-ptc-button .a-button-input').click()
    }
    
}

export default CartPage;


