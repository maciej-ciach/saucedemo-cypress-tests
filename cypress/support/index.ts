/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
      /**
       * @example cy.loginWithCredentials('testUser','testPassword')
       * @param username Username to fill in input field
       * @param password Password to fill in input field
       */
      loginWithCredentials(username: string, password: string): Chainable<Element>

      /**
       * @example cy.loginAndVerifyCookie('testUser','testPassword')
       * @param username Username to fill in input field
       * @param password Password to fill in input field
       */
      loginAndVerifyCookie(username: string, password: string): Chainable<Element>

      visitCartPage(): void
    }
  }