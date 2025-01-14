class Escenarios {
    stepNumber(numero) {
        const text = `Step #: ${numero}`;
        cy.log(text);
    }

    step(descripcion) {
        const text = `Step # ${descripcion}`;
        cy.log(text);
    }

    verication(descripcion) {
        const text = `Step # ${descripcion}`;
        cy.log(text);
    }

    subStep(descripcion) {
        const text = `Step # ${descripcion}`;
        cy.log(text);
    }

    subVerication(descripcion) {
        const text = `Step # ${descripcion}`;
        cy.log(text)
    }
}

export const escenarios = new Escenarios();