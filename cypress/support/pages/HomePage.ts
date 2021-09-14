class HomePage {
    
    validationErrorLocator: string = '[data-test=error]'

    validationError() {
        return cy.get(this.validationErrorLocator);
    }
}

export default HomePage;

