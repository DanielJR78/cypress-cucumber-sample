class SigninPage {

    constructor() {}
    visit() {cy.visit('https://www.amazon.es/ap/signin')}

    // Page actions    
    assertSigninURL(){
        cy.url().should('contains', 'https://www.amazon.es/ap/signin');
    }   
}

export default SigninPage;


