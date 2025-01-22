import { data} from "../data/data";
import { homePage, HomePage } from "../homePage/homePage";

class BarraMenu {

    constructor() {
        this.productName = [];
    }
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

    getProductName = {
        productName: () => cy.get('.card-body .card-title')
    }
    setProductName() {
        const elements = [];
        this.getProductName.productName()
        .each((products, index) => {
            elements[index] = products.text();

        })
        .then(() => {     
            for (let i = 0; i <= elements.length -1; i++) {
                cy.get('.card-body .card-title')
                .eq(i)
                .should('be.visible')
            }            
        }) 

    }
    
    setAbout() {
        this.getBarraMenu.getAbout().click();
    }

    setLogin() {
        this.getBarraMenu.getLogin().click();
    }

    setBasket() {
       
        this.getBarraMenu.getBasket().click()
        
    }
}

  
export const barraMenu = new BarraMenu();