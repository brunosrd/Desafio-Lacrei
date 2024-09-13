import { number } from "assert-plus"


class BuscarPage {
    selectorsList(){
        const selectors = {
            cadastroBuscarProfissional: "[aria-label='Ir para tela Buscar Profissional']",
            profissionalBuscar: "#search",
            buttonPesquisarProfissional: "[aria-label='Pesquisar']",
            atendimentoProfissional: "[aria-label='atendimentos']",
            buttonExibirContato: "[type='button']",
            numberField: "#cellphone",
            buttonEnviarCodigo: ".smsForm > .sc-43e2db29-0 > .sc-43e2db29-1"
        }
      return selectors
    }

    acessoBuscarProfissional(){
        cy.visit('buscar-profissional/')
    }

    irParaBuscarProfissional(){
        cy.get(this.selectorsList().cadastroBuscarProfissional).click()
    }

    buscarProfissional(){
        cy.wait(5000)
        cy.url().should('include', 'buscar-profissional/')
        cy.get(this.selectorsList().profissionalBuscar).type('Psicólogo')
        cy.get(this.selectorsList().buttonPesquisarProfissional).click()
    }

    contatarProfissional(){
        cy.get(this.selectorsList().atendimentoProfissional).click()
        cy.contains('Teleconsulta').should('be.visible')
        cy.get(this.selectorsList().buttonExibirContato).eq(2).click()
        cy.contains('Contatar Profissional').should('be.visible')
        cy.get(this.selectorsList().numberField).clear().type('55999373610')
        cy.get(this.selectorsList().buttonEnviarCodigo).click()



    }

        
    




}
export default BuscarPage