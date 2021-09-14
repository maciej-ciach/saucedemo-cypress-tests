class CheckoutStepTwoPage {

    finishButtonLocator: string = '[data-test=finish]';

    finishButton() {
        return cy.get(this.finishButtonLocator);
    }

}

export default CheckoutStepTwoPage;