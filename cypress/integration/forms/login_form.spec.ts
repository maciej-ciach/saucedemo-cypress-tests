
import HomePage from '../../support/pages/HomePage';

describe('Login Form', () => {

    let homePage;

    it('TC01: Login form validation', () => {
        cy.loginWithCredentials('', '');
        homePage = new HomePage();
        homePage.validationError().should('contain.text', 'Username is required')
    })

    it('TC02: Success Login', () => {
        cy.loginAndVerifyCookie(Cypress.env('STANDARD_USER_USERNAME'), Cypress.env('STANDARD_USER_PASSWORD'));
    })
})