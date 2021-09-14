import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';
import CheckoutCompletePage from '../support/pages/CheckoutCompletePage';
import CheckoutStepTwoPage from '../support/pages/CheckoutStepTwoPage';
import StorePage from '../support/pages/StorePage';

describe('Order process', () => {

    context('Logged User', () => {

        let storePage, cartPage, checkoutPage, checkoutStepTwoPage, checkoutCompletePage;

        beforeEach(() => {
            cy.loginAndVerifyCookie(Cypress.env('STANDARD_USER_USERNAME'), Cypress.env('STANDARD_USER_PASSWORD'));
        })

        it('TC03: Success Order', () => {
            const sauceLabsBackpackProductName = 'Sauce Labs Backpack'
            const firstName = 'fist';
            const lastName = 'last';
            const postalCode = '000';

            storePage = new StorePage();
            storePage.productAddToCartButton(sauceLabsBackpackProductName).parent().then(($productDiv) => {
                storePage.productAddToCartButton(sauceLabsBackpackProductName).click();
                cy.wrap($productDiv).find(storePage.productRemoveButtonLocator(sauceLabsBackpackProductName)).should('have.text', 'Remove');
                storePage.shoppingCartItemsCounter().should('have.text', '1');
                cy.visitCartPage();

                cartPage = new CartPage();
                cartPage.inventoryItem().should('have.text', sauceLabsBackpackProductName)
                cartPage.checkoutButton().click();

                checkoutPage = new CheckoutPage();
                checkoutPage.fillCheckoutForm(firstName, lastName, postalCode);
                checkoutPage.continueButton().click();
                cy.url().should('contain', Cypress.config().baseUrl + Cypress.env('URL_CHECKOUT_STEP_TWO'));

                checkoutStepTwoPage = new CheckoutStepTwoPage();
                checkoutStepTwoPage.finishButton().click();
                cy.url().should('contain', Cypress.config().baseUrl + Cypress.env('URL_CHECKOUT_COMPLETE'));

                checkoutCompletePage = new CheckoutCompletePage();
                checkoutCompletePage.completeHeader().should('have.text', 'THANK YOU FOR YOUR ORDER');
            });

        })
    })
})