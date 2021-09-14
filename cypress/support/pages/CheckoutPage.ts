class CheckoutPage {

    continueButtonLocator:string  = '[data-test=continue]';

    firstNameInput: string = '[data-test=firstName]';
    lastNameInput: string = '[data-test=lastName]';
    postalCodeInput: string = '[data-test=postalCode]';

    continueButton() {
        return cy.get(this.continueButtonLocator);
    }

    fillCheckoutForm(firstname: string, lastname: string, postalCode: string) {
        cy.get(this.firstNameInput).type('fist');
        cy.get(this.lastNameInput).type('last');
        cy.get(this.postalCodeInput).type('000');
    }

}

export default CheckoutPage