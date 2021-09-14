class CheckoutCompletePage {
    completeHeaderLocator: string = '.complete-header';

    completeHeader = () => {
        return cy.get(this.completeHeaderLocator)
    }
}

export default CheckoutCompletePage