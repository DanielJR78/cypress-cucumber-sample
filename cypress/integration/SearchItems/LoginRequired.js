import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ItemPage from "../common/page-objects/ItemPageObject";
import CartPage from "../common/page-objects/CartPageObject";

const itemPage = new ItemPage()
const cartPage = new CartPage()

//GIVEN
Given('I add the current item to the cart', () => {
  itemPage.performAddToCart()      
});


//WHEN
When('I select Process order action from Cart page', () => {  
  cartPage.performProcessOrder()
});

When('I select Buy now action for current item', () => {
  itemPage.performBuyNow()
});

When('I select Add to wish list action for current item', () => {
  itemPage.performAddToWishList()
  
});


