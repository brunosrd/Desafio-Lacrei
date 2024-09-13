import BuscarPage from "../../pages/buscarPage"
import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()
const buscarPage = new BuscarPage()

describe('Lacrei Saúde', () => {
    beforeEach(() => {
        loginPage.acessoLoginPage()
        loginPage.loginComSucesso()
    })
    it('Buscar Profissionais - Sucesso', () => {
        buscarPage.buscarProfissional()
        buscarPage.contatarProfissional()
    })


    it('Contatar Profissional - Sucesso', () => {
        buscarPage.contatarProfissional()

    })


})