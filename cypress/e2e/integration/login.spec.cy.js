import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()
describe('Lacrei Saúde', () => {
    it('Login com Sucesso', () => {
        loginPage.acessoLoginPage()
        loginPage.loginComSucesso() 
    })

})