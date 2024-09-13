# Casos de teste

**ID: CT-001: Cadastro da Pessoa Usuária - Sucesso**
**Objetivo:** **Verificar se o cadastro da pessoa usuária é realizado com sucesso.**
**Pré-condições:**
Acesso à versão mobile do site ou aplicativo da Lacrei Saúde.
**Passos para execução:**
1.Acessar a página de cadastro.
Verificar se “Crie sua conta na Lacrei Saúde” é exibido.
2.Preencher os campos obrigatórios com os dados:
Nome: Bruno 
Sobrenome: Ribeiro
E-mail: bruno
Confirme seu e-mail: brunosr099@outlook.com
Senha: Teste@123
Confirme sua senha: Teste@123
3. Marcar caixa de termos de uso e Política de privacidade
4. Marcar a caixa de seleção confirmando que tem 18 anos ou mais.
5. Clicar no botão “Cadastrar”.
Verificar se a mensagem “Estamos quase lá…” é exibida, informando que um link de verificação foi enviado para o e-mail cadastrado.
6. Clicar na opção para “Voltar ao login”.
7. Verificação do E-mail:
Acessar o e-mail cadastrado.
Verificar se o e-mail de verificação foi recebido.
Clicar no link de Confirmar e-mail”.
**Resultado Esperado:** O usuário deve ser redirecionado para a página de login com a mensagem “E-mail confirmado com sucesso. Por favor, faça login.”

**ID: CT-002: Login com Sucesso**
**Objetivo:** Verificar se o login da pessoa usuária é realizado com sucesso.
**Pré-condições:**
Acesso à versão mobile do site ou aplicativo da Lacrei Saúde.
Conta de usuário previamente cadastrada e verificada.
**Passos para execução:**
1. Acessar a página de login.
2. Verificar se “Entre ou crie sua conta Lacrei Saúde” é exibido.
3. Preencher os campos obrigatórios com os dados:
E-mail: brunosr099@outlook.com
Senha: Teste@123
3. Clicar no botão “Entrar”.
**Resultado Esperado:** O usuário deve ser redirecionado para a página inicial com a url ‘buscar-profissional/’

**ID: CT-003: Pós-Cadastro da Pessoa Usuária - Sucesso**
**Objetivo:** Verificar se o pós-cadastro da pessoa usuária é realizado com sucesso.
**Pré-condições:**
Acesso à versão mobile do site ou aplicativo da Lacrei Saúde.
Conta de usuário previamente cadastrada e verificada.
**Passos para execução:**
1. Acessar a página de ‘pos-cadastro/preferencias/’
Verificar se a mensagem “Boas-vindas à Lacrei Saúde, continue o seu cadastro” é exibida.
2. Clicar no botão “Continuar cadastro”.
3. Responder 5 perguntas:

Primeira pergunta, Verificar se é exibido “Com qual pronome você se identifica?” e  selecione uma das opções disponíveis:
- **Ele/Dele**
- Ela/Dela
- Elu/Delu
- Outro
Clicar no botão “Próximo”.

Segunda Pergunta, Verificar se é exibido “Com qual etnia você se identifica? e selecione uma das opções disponíveis:
- Amarela
- **Branca**
- Indígena
- Parda
- Preta
- Outra
Clicar no botão “Próximo”.

Terceira Pergunta, Verificar se é exibido “Qual é sua identidade de gênero?” e selecione uma das opções disponíveis:
- Agênera
- Fluida
- **Homem Cis**
- Homem Trans
- Intersexo
- Mulher Cis
- Mulher Trans
- Não-Binária
- Travesti
- Outra
Clicar no botão “Próximo”.

Quarta Pergunta, Verificar se é exibido “Qual é a sua sexualidade?” e selecione uma das opções disponíveis:
- Assexual
- Bissexual
- Demissexual
- Gay
- **Heterossexual**
- Pansexual
- Lésbica
- Outra
Clicar no botão “Próximo”.

Quinta Pergunta, Verificar se é exibido “Você possui alguma deficiência?” e selecione uma ou mais opções disponíveis:
- **Não possuo deficiência**
- Auditiva
- Cognitiva
- Motora
- Múltipla
- Visual
- Outra
Clicar no botão “Concluir”

4.Verificar se a mensagem “Seu cadastro foi concluído!” é exibida
**Resultado Esperado:** O usuário deve ver a mensagem “Seu cadastro foi concluído!” e as opções para “Buscar profissional” e “Editar”.

**ID: CT-004: Buscar Profissionais - Sucesso**
**Objetivo:** Verificar se a busca por profissionais é realizada com sucesso.
**Pré-condições:**
Acesso à versão mobile do site ou aplicativo da Lacrei Saúde.
Conta de usuário previamente cadastrada, verificada e pós-cadastro concluído.
**Passos para execução:**
1. Acessar a página inicial buscar-profissional/
2. Verificar se a mensagem “Boas-vindas à Lacrei Saúde! Encontre profissionais da saúde buscando por profissão, especialidade, localidade e também por sexualidade ou identidade de gênero.” é exibida.
3. Preencher o campo de busca com a profissão “psicólogo”.
4. Clicar no botão “Pesquisar”.
**Resultado Esperado:** O usuário deve ver a mensagem “Encontramos 1 resultado(s) para ‘psicólogo’” e o nome “John Doe de Queirós da Silva”. 

**ID: CT-005: Contatar Profissional - Sucesso**
**Objetivo:** Verificar se o contato com o profissional é realizado com sucesso.
**Pré-condições:**
Acesso à versão mobile do site ou aplicativo da Lacrei Saúde.
Conta de usuário previamente cadastrada, verificada e pós-cadastro concluído.
Busca por profissional realizada e profissional selecionado.
**Passos para execução:**
1. Buscar por profissional
2. Verificar se as informações do profissional são exibidas corretamente.
3. Clicar na aba “Atendimentos”.
4. Verificar se a opção de  “Teleconsulta” é exibida.
5. Clicar no botão “Exibir contato” da opção de atendimento “Teleconsulta”.
6. Verificar se “Contatar Profissional” é exibido.
7. Preencher o campo “Qual é seu número de celular?” 
Número: 559999373610
8. Digitar o código que foi enviado para o  SMS
Código: 872517
9. Clicar no botão “Enviar código”
**Resultado Esperado:** O usuário deve ver a mensagem “Marque sua consulta”.

**ID: CT-006: Editar Perfil - Sucesso**
**Objetivo:** Verificar se a edição do perfil da pessoa usuária é realizada com sucesso.
**Pré-condições:**
Acesso à versão mobile do site ou aplicativo da Lacrei Saúde.
Conta de usuário previamente cadastrada, verificada, pós-cadastro concluído e login.
**Passos para execução:**
1. Clicar no ícone de perfil
2. Verificar se a informação ”Bruno Ribeiro” é exibida corretamente.
3. Clicar no botão “Editar dados”.
4. Selecionar o campo “Data de nascimento”.
5. Preencher o campo com os dados:
Data: 19/01/1999
6. Clicar botão “Salvar”.
**Resultado Esperado:** O usuário deve ver a mensagem “Perfil atualizado com sucesso”.****

**ID: CT-007: Recuperar Senha - Sucesso**
**Objetivo:** Verificar se a funcionalidade de recuperação de senha é realizada com sucesso.
**Pré-condições:**
Acesso à versão mobile do site ou aplicativo da Lacrei Saúde.
Conta de usuário previamente cadastrada e verificada.
**Passos para execução:**
1. Acessar a página de login.
2. Clicar no link “Esqueci minha senha”.
3. Verificar se a página “Redefinir senha” é exibida.
4. Preencher o campo de e-mail com o endereço de e-mail cadastrado.
E-mail: brunosr099@outlook.com
5. Clicar no botão “Enviar link”.
6. Verificar se a frase “Verifique seu e-mail para redefinir a senha” é exibida
7. Acessar o e-mail cadastrado.
8. Verificar se o e-mail de redefinição de senha foi recebido.
9. Clicar no link de redefinição de senha no e-mail recebido.
10. Verificar se as opções de “Nova senha” e “Confirmar nova senha” é exibido.
11. Preencher os campos:
Nova senha: Newteste@123
Confirmar nova senha: Newteste@123
12. Clicar no botão “Redefinir senha”.
**Resultado Esperado:** O usuário deve ver a mensagem “Senha redefinida com sucesso” e ser redirecionado para a página de login.*******
13. Clicar no botão “Voltar para o login”.

**ID: CT-008: Login com nova senha - Sucesso**
**Objetivo:** Verificar se a funcionalidade de reset de senha é realizada com sucesso.
**Pré-condições:**
Acesso à versão mobile do site ou aplicativo da Lacrei Saúde.
Conta de usuário previamente cadastrada e verificada
**Passos para execução:**
1. Acessar a página de login.
2. Preencher os campos “E-mail” e “Senha”:
E-mail: brunosr099@outlook.com
Senha: Newteste@123
3. Clicar botão “Entrar”
**Resultado Esperado:** O usuário deve ser redirecionado para a página inicial com a mensagem “Boas-vindas à Lacrei Saúde”.

**Cenário de Teste de Desempenho**
**ID: 009**
**Objetivo**: Verificar e otimizar o desempenho da página de cadastro de usuário no site da Lacrei Saúde, utilizando os resultados do teste de performance do Lighthouse.
**Pré-condições**:
Acesso à versão mobile do site da Lacrei Saúde.
Ferramenta Lighthouse instalada no Google Chrome.
**Passos para execução**:
Configuração do Ambiente de Teste:
Abra o Google Chrome e navegue até a página de cadastro de usuário.
Abra o DevTools (Ctrl+Shift+I ou Cmd+Option+I no Mac) e selecione a aba “Lighthouse”.
Marque a opção “Performance” e selecione “Mobile”.
Clique em “Generate report” para iniciar a auditoria.
**Execução do Teste**:
Execute o teste de desempenho e aguarde a geração do relatório.
Analise os resultados obtidos, focando nas métricas principais e diagnósticos fornecidos.
**Análise dos Resultados**:
First Contentful Paint (FCP): 4.0 s
Largest Contentful Paint (LCP): 9.3 s
Total Blocking Time (TBT): 4,550 ms
Time to Interactive (TTI): 14.5 s
Speed Index: 14.5 s
**Diagnósticos e Melhorias**:
Minimize main-thread work: 12.3 s
Ação: Reduzir o trabalho na thread principal, otimizando scripts e removendo tarefas desnecessárias.
Largest Contentful Paint element: 9,280 ms
Ação: Melhorar o tempo de carregamento do maior elemento visível, otimizando imagens e recursos.
Reduce JavaScript execution time: 7.5 s
Ação: Minimizar o tempo de execução do JavaScript, removendo scripts não utilizados e otimizando os existentes.
Eliminate render-blocking resources: Potencial de economia de 810 ms
Ação: Remover ou adiar recursos que bloqueiam a renderização, como CSS e JavaScript.
Reduce initial server response time: Documento raiz levou 920 ms
Ação: Melhorar o tempo de resposta inicial do servidor, otimizando a infraestrutura e o código do servidor.
Reduce the impact of third-party code: Código de terceiros bloqueou a thread principal por 450 ms
Ação: Minimizar o impacto do código de terceiros, carregando-o de forma assíncrona ou removendo-o se não for essencial.
Reduce unused JavaScript: Potencial de economia de 2,627 KiB
Ação: Remover JavaScript não utilizado para reduzir o tamanho do payload.
Preconnect to required origins: Potencial de economia de 560 ms
Ação: Utilizar preconnect para melhorar o tempo de conexão com origens necessárias.
Minify CSS: Potencial de economia de 122 KiB
Ação: Minificar CSS para reduzir o tamanho dos arquivos.
Minify JavaScript: Potencial de economia de 1,179 KiB
Ação: Minificar JavaScript para reduzir o tamanho dos arquivos.
Serve static assets with an efficient cache policy: 22 recursos encontrados
Ação: Configurar políticas de cache eficientes para recursos estáticos.
Avoid serving legacy JavaScript to modern browsers: Potencial de economia de 12 KiB
Ação: Evitar servir JavaScript legado para navegadores modernos.
Reduce unused CSS: Potencial de economia de 746 KiB
Ação: Remover CSS não utilizado para reduzir o tamanho dos arquivos.
Avoid long main-thread tasks: 20 tarefas longas encontradas
Ação: Dividir tarefas longas em tarefas menores para melhorar a responsividade.
Avoids an excessive DOM size: 177 elementos
Ação: Reduzir o tamanho do DOM para melhorar o desempenho.
User Timing marks and measures: 5 marcações de tempo de usuário
Ação: Utilizar marcações de tempo de usuário para monitorar e otimizar o desempenho.
Avoids enormous network payloads: Tamanho total foi de 460 KiB
Ação: Reduzir o tamanho do payload de rede para melhorar o tempo de carregamento.
Avoid chaining critical requests: 2 cadeias encontradas
Ação: Evitar encadeamento de requisições críticas para melhorar o tempo de carregamento.
**Resultado Esperado**:
A página de cadastro deve apresentar uma melhoria significativa nas métricas de desempenho, com tempos de carregamento reduzidos e uma experiência de usuário mais fluida.
As métricas de desempenho devem estar dentro dos limites aceitáveis, com FCP abaixo de 2 segundos, LCP abaixo de 2.5 segundos, TBT abaixo de 300 ms, e TTI abaixo de 5 segundos.
**Ferramentas Utilizadas**:
Lighthouse: Para auditoria de desempenho e recomendações de otimização.
Chrome DevTools: Para análise detalhada e depuração de problemas de desempenho.
WebPageTest: Para testes de desempenho adicionais e comparações.

**Cenário de Teste de Acessibilidade**
**ID: 010**
**Objetivo**: Verificar e corrigir problemas de acessibilidade na página de cadastro de usuário no site da Lacrei Saúde.
**Pré-condições**:
Acesso à versão mobile do site da Lacrei Saúde.
Extensão WAVE instalada no navegador.
**Passos para execução**:
Configuração do Ambiente de Teste:
Abra o navegador e navegue até a página de cadastro de usuário.
Ative a extensão WAVE para iniciar a análise de acessibilidade.
**Execução do Teste**:
Execute a análise de acessibilidade com o WAVE.
Aguarde a geração do relatório, que destacará os problemas de acessibilidade na página.
Análise dos Resultados:
Erros: 0
Contrast Errors: 1
Alerts: 5
Features: 20
Structural Elements: 10
ARIA: 2
**Diagnósticos e Melhorias**:
Contrast Errors: Ajustar o contraste de cores para garantir legibilidade adequada.
Ação: Modificar as cores de fundo e texto para atingir um contraste mínimo de 4.5:1.
Alerts: Resolver alertas relacionados a elementos interativos e navegação.
Ação: Garantir que todos os elementos interativos sejam acessíveis via teclado e tenham rótulos apropriados.
Features: Verificar e otimizar os recursos identificados pelo WAVE.
Ação: Certificar-se de que todos os recursos, como cabeçalhos e links, estejam corretamente implementados.
Structural Elements: Melhorar a estrutura da página para facilitar a navegação.
Ação: Utilizar elementos estruturais como cabeçalhos de forma adequada.
ARIA: Adicionar ou corrigir rótulos ARIA para melhorar a acessibilidade.
Ação: Implementar rótulos ARIA onde necessário para descrever a função dos elementos interativos.
**Resultado Esperado**:
A página de cadastro deve ser totalmente acessível, com todos os erros e alertas resolvidos.
A pontuação de acessibilidade deve ser alta, indicando conformidade com as diretrizes de acessibilidade.
Ferramentas Utilizadas:
WAVE: Ferramenta de avaliação de acessibilidade que destaca áreas problemáticas e fornece sugestões para melhorias. Útil para identificar problemas de contraste, rótulos de formulário, e navegação por teclado

**Cenário de Teste de Responsividade Mobile**
**ID: 011**
**Objetivo:** Verificar se a página de cadastro de usuário no site da Lacrei Saúde é responsiva e se adapta corretamente a diferentes tamanhos de tela em dispositivos móveis, especificamente no iPhone XR e no Samsung Galaxy S20 Ultra.
**Pré-condições:**
Acesso à versão mobile do site da Lacrei Saúde.
Ferramenta de teste de responsividade, Inspetor 
**Dispositivos Considerados:**
**1.Iphone XR:**
Resolução: 414 x 896 pixels
Tamanho da tela: 6.1 polegadas
**2.Samsung Galaxy S20 Ultra:**
Resolução: 420 x 915 pixels
Tamanho da tela: 6.9 polegadas
**Passos para execução:**
1. Configuração do Ambiente de Teste:**
Abra o Google Chrome e navegue até a página de cadastro de usuário.
Abra o DevTools, Resposive
2. Teste de Responsividade no iPhone XR:**
Verifique se todos os elementos da página são exibidos corretamente na tela.
Certifique-se de que os campos de entrada são facilmente acessíveis e utilizáveis.
Verifique se os botões e links são clicáveis e funcionam corretamente.
Teste a rolagem da página para garantir que não há elementos cortados ou fora de lugar.
**Resultado Esperado:** A página deve ser totalmente funcional e visualmente agradável no iPhone XR, sem necessidade de zoom ou rolagem horizontal.
3. Configuração do Ambiente de Teste para Samsung Galaxy S20 Ultra:**
No DevTools, selecione o dispositivo “Samsung Galaxy S20 Ultra” na lista de dispositivos.
4. Teste de Responsividade no Samsung Galaxy S20 Ultra:**
Verifique se todos os elementos da página são exibidos corretamente na tela.
Certifique-se de que os campos de entrada são facilmente acessíveis e utilizáveis.
Verifique se os botões e links são clicáveis e funcionam corretamente.
Teste a rolagem da página para garantir que não há elementos cortados ou fora de lugar.
**Resultado Esperado:** A página deve ser totalmente funcional e visualmente agradável no Samsung Galaxy S20 Ultra, sem necessidade de zoom ou rolagem horizontal.