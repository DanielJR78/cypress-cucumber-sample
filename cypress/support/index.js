// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')

import SearchPage from "../integration/amazon/SearchItems/SearchItemsPageObject";

const searchPage = new SearchPage();

before(() => {
    cy.log('I run ONCE before all the test in every spec file!!!!!!')    
})

beforeEach(() => {
    cy.log('I run before EACH test in every spec file!!!!!!')
    searchPage.visit();
    searchPage.actCookiesAccept();
})
