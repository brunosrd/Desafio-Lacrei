import CadastroPage from "../../pages/cadastroPage"

const cadastroPage = new CadastroPage()


describe('Lacrei Saúde', () => {
    it('Cadastro da Pessoa Usuária - Sucesso', () => {
        cadastroPage.acessoCadastroPage()
        cadastroPage.cadastroUsuario()
    })

    it('Pós-Cadastro da Pessoa Usuária - Sucesso', () => {
    cadastroPage.acessoPosCadastroPage()
    cadastroPage.irPosCadastroUsuario()
    cadastroPage.acessoPerguntasPosCadastro()
    cadastroPage.perguntasPosCadastro()
    cadastroPage.cadastroConcluido()
    })

})