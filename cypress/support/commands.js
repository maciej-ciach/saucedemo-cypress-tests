// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginWithCredentials', (username, password) => {
    const loginButton = '[data-test=login-button]';
    const usernameInput = '[data-test=username]';
    const passwordInput = '[data-test=password]';

    cy.clearLocalStorage().clearCookies();
    cy.visit(Cypress.config().baseUrl);

    cy.get(usernameInput).should('have.value', '');
    cy.get(passwordInput).should('have.value', '');
    if (username) {
        cy.get(usernameInput).type(username);
    }
    if (password) {
        cy.get(passwordInput).type(password);
    }
    cy.get(loginButton).click();
})

Cypress.Commands.add('loginAndVerifyCookie', (username, password) => {
    cy.loginWithCredentials(username, password);
    cy.url().should('not.eq', Cypress.config().baseUrl)
    cy.getCookie(Cypress.env('SESSION_COOKIE_NAME')).should('have.property', 'value', username)
})

Cypress.Commands.add('visitCartPage', () => {
    cy.visit(Cypress.config().baseUrl + Cypress.env('URL_CART'), { failOnStatusCode: false });
})