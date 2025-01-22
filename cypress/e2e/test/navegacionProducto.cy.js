import { barraMenu } from "../page/barrNemu/barrMenu";
import { data } from "../page/data/data";
import { homePage, HomePage} from "../page/homePage/homePage";
import { escenarios } from "../util/escenarios";

describe(data.getTestSuit().navegacionProducto, () => {
    it('Navegar por poductos', () => {
        escenarios.stepNumber(1);
        escenarios.step('Navegar pagina Sweets');
        barraMenu.linknavegacion();

        escenarios.stepNumber(2);
        escenarios.step('Hacer click en la opcion Sweets del menu');
        barraMenu.setSweets();

        escenarios.stepNumber(3);
        escenarios.step('Validarque se muestran todos los productos disponibles');
        // homePage.verifyproduct(barraMenu.setProductName());

        // homePage.verifyproduct(productName)
       homePage.verifyproduct(barraMenu.setProductName());

    })
})