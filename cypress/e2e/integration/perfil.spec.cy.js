import PerfilPage from '../../pages/perfilPage'
import LoginPage from "../../pages/loginPage"


const perfilPage = new PerfilPage()
const loginPage = new LoginPage()


describe('Lacrei Saúde', () => {
    beforeEach(() => {
        loginPage.acessoLoginPage()
        loginPage.loginComSucesso()
    })
    it('Editar Perfil - Sucesso', () => {
        perfilPage.editarPefil()
    })

    it('Recuperar Senha - Sucesso', () => {
        loginPage.buttonSairConta()
        perfilPage.recuperarSenha()
        perfilPage.verificarEmailRedefinirSenha()
    })
})
