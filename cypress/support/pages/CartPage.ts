class CartPage {

    checkoutButtonLocator: string = '[data-test=checkout]';
    inventoryItemLocator: string = '.inventory_item_name';

    checkoutButton() {
        return cy.get(this.checkoutButtonLocator);
    }

    inventoryItem() {
        return cy.get(this.inventoryItemLocator);
    }

}

export default CartPage