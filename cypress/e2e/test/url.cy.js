import { barraMenu } from "../page/barrNemu/barrMenu"
import { browseSweets } from "../page/browseSweet/browseSweet";


describe('Direccion', () => {
    it('Validando la direccion de la pagina', () => {
        barraMenu.linknavegacion();
        browseSweets.setBrowseSweet();

    })
})


// describe('template spec', () => {
//     it('passes', () => {
//       cy.visit('https://sweetshop.netlify.app/')
  
  
      
//     })
//   })