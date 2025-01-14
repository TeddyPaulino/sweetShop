import { basket } from "../page/addBasket/addBasket";
import { barraMenu } from "../page/barrNemu/barrMenu"
import { data } from "../page/data/data";
import { browseSweets } from "../page/browseSweet/browseSweet";
import { escenarios } from "../util/escenarios";
import { homePage } from "../page/homePage/homePage";


describe(data.getTestSuit().paginaInicio, () => {
    it('página de inicio', () => {
        escenarios.stepNumber(1);
        escenarios.step('Ingresar pagina correctamente');
        barraMenu.linknavegacion();

        escenarios.stepNumber(2);
        escenarios.verication('Verificar que la página de inicio se cargue correctamente');
        homePage.setTitle();
    })

    it.only('Confirmar que los enlaces', () => {
        escenarios.stepNumber(1);
        escenarios.step('Navegar a la pagina Sweets');
        barraMenu.linknavegacion();
        escenarios.step('Confirmar que los enlaces de navegación redirijan correctamente');
        homePage.setMenu();
    })
})


