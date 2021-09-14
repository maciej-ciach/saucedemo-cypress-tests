class StorePage {

     productAddToCartButtonLocator(productName: string): string {
        let productLocator = productName.split(' ').join('-').toLocaleLowerCase();
        return `[data-test=add-to-cart-${productLocator}]`;
    }

     productRemoveButtonLocator(productName: string): string {
        let productLocator = productName.split(' ').join('-').toLocaleLowerCase();
        return `[data-test=remove-${productLocator}]`;
    }

     productAddToCartButton(productName: string) {
        return cy.get(this.productAddToCartButtonLocator(productName));
    }

     productRemoveFromCartButton(productName: string) {
        return cy.get(this.productRemoveButtonLocator(productName));
    }

     shoppingCartItemsCounter() {
        return cy.get('.shopping_cart_badge')
    }
    
}

export default StorePage