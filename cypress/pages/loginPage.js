
class LoginPage {
    selectorsList(){
        const selectors = {
            emailField: "[name='email']",
            passwordField: "[name='password']",
            buttonEnter: "[aria-label='Entrar na Lacrei Saúde']",
            buttonSairConta: "[alt='logout']",

        }
        return selectors
    }

    acessoLoginPage(){
        cy.visit('/')
    }

    loginComSucesso(){
        cy.wait(2000)
        cy.get(this.selectorsList().emailField).type('brunosr099@outlook.com')
        cy.get(this.selectorsList().passwordField).type('Teste@123')
        cy.get(this.selectorsList().buttonEnter).click()   
    }

    buttonSairConta(){
        cy.get(this.selectorsList().buttonSairConta).click()
    }

}

export default LoginPage