class Basket {
    getBasket = {
        addBasket: () => cy.contains('a', 'Add to Basket')
    }

    setBasket() {
        this.getBasket.addBasket().click();
    }
}

export const basket = new Basket();