class Browsesweets {
    getBrowseSweet = {
        sweet: () => cy.contains('a', 'Browse Sweets')
    }

    setBrowseSweet() {
        this.getBrowseSweet.sweet().click();
    }
}

export const browseSweets = new Browsesweets();