class PerfilPage {
    selectorsList(){
        const selectors = {
            fotoPefil: ".sc-5e4672f-3",
            editarDados: "[aria-label='editar dados pessoais']",
            editarDataNascimento: "#birth_date",
            buttonSalvarDados: ":nth-child(2) > .sc-43e2db29-0 > .sc-43e2db29-1",
            buttonEsqueciSenha: ".buttons > a",
            emailRedefinirSenha: "#email",
            clicarBeforeEmail: "[for='email']",
            buttonLinkRedefinirSenha: "[type='submit']",
            voltarParaTelaInicial: ".content-container > .sc-43e2db29-0 > .sc-43e2db29-1"
        }
        return selectors
    }

    editarPefil(){
        cy.get(this.selectorsList().fotoPefil).click()
        cy.wait(5000)
        cy.contains('Bruno Ribeiro').should('be.visible')
        cy.get(this.selectorsList().editarDados).click()
        cy.get(this.selectorsList().editarDataNascimento).clear().invoke('val', '1999-01-19')
        cy.get(this.selectorsList().buttonSalvarDados).click()
    }

    recuperarSenha(){
        cy.get(this.selectorsList().buttonEsqueciSenha).click()
        cy.contains('Redefinir senha').should('be.visible')
        cy.get(this.selectorsList().emailRedefinirSenha).type('brunosr099@outlook.com')
        cy.get(this.selectorsList().clicarBeforeEmail).click()
        cy.get(this.selectorsList().buttonLinkRedefinirSenha).click()
    }

    verificarEmailRedefinirSenha(){
        cy.url().should('include', 'redefinicao-de-senha/verificar-email/')
        cy.get(this.selectorsList().voltarParaTelaInicial).click()

    }



}
export default PerfilPage