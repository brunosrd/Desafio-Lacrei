// import { gerarEmailRandomico } from '../pages/utils'
 

class CadastroPage {
    selectorsList(){
        const selectors = {
            firtNameField: "[name='first_name']",
            lastNameField: "[name='last_name']",
            emailField: "[type='email']",
            senhaField: "[type='password']",
            checkboxCadastro: ".check-container",
            buttonCadastro: "[type='submit']",
            buttonVoltarLogin: "[aria-label='Voltar ao login']",
            buttonIrCadastro: ".button-container > .sc-43e2db29-0 > .sc-43e2db29-1",
            checkboxQuestion: ".radio-button",
            buttonProxQuestion: "[aria-label='ir para próxima página']",
            checkboxLastQuestion: ".checkbox",

        }
        return selectors
    }


    acessoCadastroPage(){
        cy.visit('cadastro/')
    }

    cadastroUsuario(){
        // const email = gerarEmailRandomico();
        cy.contains('Crie sua conta na Lacrei Saúde').should('be.visible')
        cy.get(this.selectorsList().firtNameField).type('Bruno')
        cy.get(this.selectorsList().lastNameField).type('Ribeiro')
        cy.get(this.selectorsList().emailField).eq(0).clear().type('brunosr099@outlook.com')
        cy.get(this.selectorsList().emailField).eq(1).clear().type('brunosr099@outlook.com')
        cy.get(this.selectorsList().senhaField).eq(0).clear().type('Teste@123')
        cy.get(this.selectorsList().senhaField).eq(1).clear().type('Teste@123')
        cy.get(this.selectorsList().checkboxCadastro).eq(0).click()
        cy.get(this.selectorsList().checkboxCadastro).eq(1).click()
        cy.get(this.selectorsList().buttonCadastro).click()
        cy.contains('Estamos quase lá...').should('be.visible')
        cy.get(this.selectorsList().buttonVoltarLogin).click()

    }   

    acessoPosCadastroPage(){
        cy.visit('pos-cadastro/')
    }

    irPosCadastroUsuario(){
        cy.wait(5000)
        cy.url().should('include', 'pos-cadastro/')
        cy.get(this.selectorsList().buttonIrCadastro).should('be.visible').click()
    }

    acessoPerguntasPosCadastro(){
        cy.visit('pos-cadastro/preferencias/')
    }
    perguntasPosCadastro(){
        cy.contains('Com qual pronome você se identifica?').should('be.visible')
        cy.get(this.selectorsList().checkboxQuestion).eq(1).click()
        cy.get(this.selectorsList().buttonProxQuestion).click()
        cy.contains('Com qual etnia você se identifica?').should('be.visible')
        cy.get(this.selectorsList().checkboxQuestion).eq(1).click()
        cy.get(this.selectorsList().buttonProxQuestion).click()
        cy.contains('Qual é a sua identidade de gênero?').should('be.visible')
        cy.get(this.selectorsList().checkboxQuestion).eq(2).click()
        cy.get(this.selectorsList().buttonProxQuestion).click()
        cy.contains('Qual é a sua sexualidade?').should('be.visible')
        cy.get(this.selectorsList().checkboxQuestion).eq(4).click()
        cy.get(this.selectorsList().buttonProxQuestion).click()
        cy.contains('Você possui alguma deficiência?').should('be.visible')
        cy.get(this.selectorsList().checkboxLastQuestion).eq(0).click()
        cy.get(this.selectorsList().buttonProxQuestion).click()
    }
    
    cadastroConcluido(){
        cy.contains('Seu cadastro foi concluído!').should('be.visible')
    }

}

export default CadastroPage