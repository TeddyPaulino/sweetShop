import { data} from "../data/data";

class BarraMenu {
    getBarraMenu = {
        getLogo: () => cy.get('a.navbar-brand'),
        getSweets: () => cy.contains('a', 'Sweets'),
        getAbout: () => cy.get('a[href="/about"]'),
        getLogin: () => cy.get('a[href="/login"]') , 
        getBasket: () => cy.get('a[href="/basket"]')
    }

    linknavegacion() {
        cy.visit(data.getUrl())
    }

    setLogo() {
        this.getBarraMenu.getLogo().click();
        
    }

    setSweets() {
        this.getBarraMenu.getSweets().click();
    }

    setAbout() {
        this.getBarraMenu.getAbout().click();
    }

    setLogin() {
        this.getBarraMenu.getLogin().click();
    }

    setBasket() {
        this.getBarraMenu.getBasket().click();
    }
}

  
export const barraMenu = new BarraMenu();