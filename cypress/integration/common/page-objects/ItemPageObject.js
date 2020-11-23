class ItemPage {

    constructor() {}
    //no visit function

    // Page actions
    performAddToCart(){       
        cy.get('#add-to-cart-button').click()
    }
    performBuyNow(){        
        cy.get('#buy-now-button').click()
    }
    performAddToWishList(){        
        cy.get('#wishListMainButton-announce').click()
    }
}

export default ItemPage;


