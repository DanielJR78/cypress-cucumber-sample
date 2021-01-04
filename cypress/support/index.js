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

import './commands'
import HomePage from "../integration/common/page-objects/HomePageObject";

before(() => {
    cy.log('I run ONCE BEFORE starting')
})

beforeEach(() => {
    cy.log('I run BEFORE EACH test')

    cy.log('<< Common Background for any Feature >>')
    const homePage = new HomePage();
    homePage.visit();
    homePage.actAcceptCookies();
})

after(() => {
  cy.log('I run ONCE AFTER finishing')
})
