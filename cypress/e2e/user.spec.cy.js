import CadastroPage from "../pages/cadastroPage"
import LoginPage from "../pages/loginPage"
import BuscarPage from "../pages/buscarPage"
import PerfilPage from "../pages/perfilPage"

const perfilPage = new PerfilPage()
const buscarPage = new BuscarPage()
const loginPage = new LoginPage()
const cadastroPage = new CadastroPage()

describe('Lacrei Saúde', () => {

  it('Cadastro', () => {
    cadastroPage.acessoCadastroPage() 
    cadastroPage.cadastroUsuario() 
  })

  it('Fluxo pessoa usuária - Sucesso', () => {
    loginPage.acessoLoginPage() 
    loginPage.loginComSucesso() 
    cadastroPage.irPosCadastroUsuario() 
    cadastroPage.acessoPerguntasPosCadastro() 
    cadastroPage.perguntasPosCadastro() 
    cadastroPage.cadastroConcluido() 
    buscarPage.irParaBuscarProfissional() 
    buscarPage.buscarProfissional() 
    buscarPage.contatarProfissional() 
    perfilPage.editarPefil()
    loginPage.buttonSairConta()
    loginPage.buttonSairConta()
    perfilPage.recuperarSenha()
    perfilPage.verificarEmailRedefinirSenha()








  })




  


})