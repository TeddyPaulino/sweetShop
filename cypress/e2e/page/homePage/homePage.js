import { barraMenu } from "../barrNemu/barrMenu";

class HomePage {
  
    getTitle = {

        title: () => cy.get('h1')    
    }

    setTitle() {
        this.getTitle.title()
        .should('be.visible')
        .and('contain', 'Welcome to the sweet shop!')
    }

    getMenu = {
        clickMenu: () => cy.get('.nav-link')
    }

    setMenu() {
        const datos = [];
        this.getMenu.clickMenu()
        .each((menuItem, index) =>  {
            datos[index] = menuItem.text();
        })  
        .then(() => {
            for (let i = 0; i <= datos.length - 1; i++) {
                cy.get('.nav-link')
                .eq(i)
                .click()
               cy.wait(3000)
               barraMenu.setLogo();
            }
            
        }) 
        
       
    }
}

export const homePage = new HomePage();