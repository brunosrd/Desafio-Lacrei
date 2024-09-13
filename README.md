# **Desafio Lacrei**

## **Introdução**

**Objetivo**: 
Verificar que as funcionalidades críticas do sistema sejam testadas de forma eficaz, assegurando que o sistema atenda aos requisitos funcionais, de desempenho, acessibilidade e responsividade. Visando executar os testes com base em critérios de aceite para Lacrei Saúde, que conectam pessoas LGBTQIAPN+ com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.

## **Instalação e Execução dos Testes**

1. **Instale o Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo aqui.
2. **Crie uma nova pasta para o projeto**: Navegue até o local onde deseja criar seu projeto e crie uma nova pasta.
3. **Inicialize o projeto com npm**: 

    ```bash
    npm init -y

4. **Instale o Cypress**:

    ```bash
    npm install cypress --save-dev

5. **Execute os testes**:

    ```bash
    Modo interativo: npx cypress open 
    Modo headless: npx cypress run

## **Escopo**

- **ID: CT-001**: Cadastro da Pessoa Usuária - Sucesso
- **ID: CT-002**: Pós-Cadastro da Pessoa Usuária - Sucesso
- **ID: CT-003**: Login com Sucesso
- **ID: CT-004**: Buscar Profissionais - Sucesso
- **ID: CT-005**: Contatar Profissional - Sucesso
- **ID: CT-006**: Editar Perfil - Sucesso
- **ID: CT-007**: Recuperar Senha - Sucesso
- **ID: CT-008**: Login com nova senha - Sucesso
- **ID: 009**: Cenário de Teste de Desempenho
- **ID: 010**: Cenário de Teste de Acessibilidade
- **ID: 011**: Cenário de Teste de Responsividade Mobile

## **Recursos**

- **Analista de teste**: **Bruno Vinicius Soares Ribeiro**
- **Prioridade**: Alta
- **Severidade**: Alta
- **Implementação Manual**: Sim
- **Implementação Automatizada**: Sim
- **Data de Inicio**: 11/09/2024
- **Data Final de Entrega**: 16/09/2024

## **Estratégias de Teste, Tipos e Abordagens**

- **CT-001**: Tipo de teste funcional e abordagem de teste de caixa preta, verificando se o cadastro é realizado com sucesso ao inserir dados válidos.
- **CT-002**: Tipo de teste funcional e abordagem de teste de caixa preta, verificando se as ações pós-cadastro (como redirecionamento ou mensagens de boas-vindas) ocorrem corretamente.
- **CT-003**: Tipo de teste funcional e abordagem de teste de caixa preta, verificando se o login é bem-sucedido com credenciais válidas.
- **CT-004**: Tipo de teste funcional e abordagem de teste de caixa preta, verificando se a busca retorna resultados corretos com base nos critérios de pesquisa.
- **CT-005**: Tipo de teste funcional e abordagem de teste de caixa preta, verificando se a funcionalidade de contato está funcionando corretamente.
- **CT-006**: Tipo de teste funcional e abordagem de teste de caixa preta, verificando se as alterações no perfil são salvas corretamente.
- **CT-007**: Tipo de teste funcional e abordagem de teste de caixa preta, verificando se o processo de recuperação de senha funciona corretamente.
- **CT-008**: Tipo de teste funcional e abordagem de teste de caixa preta, verificando se o login é bem-sucedido com a nova senha.
- **ID: 009**: Tipo de teste de desempenho e abordagem de teste de carga e estresse, verificando como o sistema se comporta sob diferentes níveis de carga e se mantém estável sob condições extremas.
- **ID: 010**: Tipo de teste de acessibilidade, abordagem de verificação de conformidade com as diretrizes de acessibilidade.
- **ID: 011**: Tipo de teste de responsividade, abordagem de teste em diferentes dispositivos e tamanhos de tela para garantir que o sistema é responsivo e funciona corretamente em dispositivos móveis.

## **Objetivos do Teste**

- **Cadastro da Pessoa Usuária**: Garantir que novos usuários possam se cadastrar com sucesso no sistema.
- **Pós-Cadastro da Pessoa Usuária**: Verificar se as ações pós-cadastro são executadas corretamente.
- **Login com Sucesso**: Assegurar que os usuários possam fazer login com credenciais válidas.
- **Buscar Profissionais**: Confirmar que a funcionalidade de busca retorna resultados precisos e relevantes.
- **Contatar Profissional**: Garantir que os usuários possam contatar profissionais sem problemas.
- **Editar Perfil**: Verificar que as alterações no perfil do usuário são salvas e refletidas corretamente.
- **Recuperar Senha**: Assegurar que o processo de recuperação de senha é funcional e seguro.
- **Login com nova senha**: Confirmar que os usuários podem fazer login com a nova senha após a recuperação.
- **Teste de Desempenho**: Avaliar a capacidade do sistema de lidar com cargas de trabalho variadas e identificar possíveis gargalos.
- **Teste de Acessibilidade**: Garantir que o sistema é acessível a todos os usuários, incluindo aqueles com deficiências.
- **Teste de Responsividade Mobile**: Assegurar que o sistema é utilizável e funcional em dispositivos móveis de diferentes tamanhos.

## **Ambiente de Teste**

### **Hardware**

- **Servidor de Teste**: Utilizado para execução de testes funcionais e de desempenho.
  - Configuração: 16 vCPUs, 32 GB RAM, 1 TB SSD.
- **Servidor de Produção (Simulado)**: Utilizado para testes de carga e estresse.
  - Configuração: 32 vCPUs, 64 GB RAM, 2 TB SSD.

### **Software**

- **Desktops**: Windows 11
- **Dispositivos Móveis**: iPhone XR e Samsung Galaxy S20 Ultra
- **Navegadores**: Google Chrome versão 128.0.6613.137 (Versão oficial) 64 bits

### **Ferramentas**

- **Cypress**: Testes funcionais automatizados, E2E.
- **Notion**: Documentação.
- **Github**: Repositório.
- **Git**: Versionamento.
- **Lighthouse**: Teste de desempenho e acessibilidade.
- **IDEs**: Visual Studio Code.
- **Gerenciador de pacotes**: npm
- **Gravador de tela**: Free Cam 8
- **Mochawesome**: Relatório

## **Critérios de Aceitação**

- **Cadastro da Pessoa Usuária**: O usuário deve ser capaz de se cadastrar com sucesso ao inserir todos os dados obrigatórios corretamente.
- **Pós-Cadastro da Pessoa Usuária**: O sistema deve redirecionar o usuário para a página correta e exibir uma mensagem de boas-vindas.
- **Login com Sucesso**: O usuário deve conseguir fazer login com credenciais válidas.
- **Buscar Profissionais**: A busca deve retornar resultados relevantes com base nos critérios de pesquisa inseridos.
- **Contatar Profissional**: O usuário deve conseguir enviar uma mensagem ou solicitar um contato com um profissional.
- **Editar Perfil**: As alterações no perfil do usuário devem ser salvas e refletidas corretamente.
- **Recuperar Senha**: O processo de recuperação de senha deve ser concluído com sucesso e o usuário deve receber um e-mail de recuperação.
- **Login com nova senha**: O usuário deve conseguir fazer login com a nova senha após a recuperação.
- **Teste de Desempenho**: O sistema deve manter a performance aceitável sob diferentes níveis de carga.
- **Teste de Acessibilidade**: O sistema deve estar em conformidade com as diretrizes de acessibilidade.
- **Teste de Responsividade Mobile**: O sistema deve funcionar corretamente em dispositivos móveis de diferentes tamanhos.

## **Riscos e Mitigações**

- **Risco**: Falha na integração com sistemas externos.
  - **Mitigação**: Realizar testes de integração antecipadamente e frequentemente.
- **Risco**: Problemas de performance sob alta carga.
  - **Mitigação**: Executar testes de carga e estresse regularmente e otimizar o código conforme necessário.
- **Risco**: Não conformidade com diretrizes de acessibilidade.
  - **Mitigação**: Utilizar ferramentas de verificação de acessibilidade e realizar revisões manuais.
