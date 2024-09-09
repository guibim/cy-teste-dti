# cypress-provapraticaqa-dti
DESAFIO TÉCNICO (ESTÁGIO) – QUALITY ASSURANCE ENGINEER

## Projeto de Automação de Testes com Cypress

Este projeto envolve a criação de uma suíte de testes automatizados utilizando o framework Cypress, com o intuito de garantir a qualidade e confiabilidade das principais funcionalidades de uma aplicação web. Os testes foram executados em um site para validar o fluxo de login, cobrindo cenários de sucessos e falhas, além de testar o processo de inscrição na newsletter, assegurando o correto funcionamento dessas funcionalidades essenciais.

## Estrutura dos Testes Realizados
- 1. Cadastro com email repetido
- 2. Login com falha de autenticação
- 3. Recuperação de senha
- 4. Cadastro no Newsletter

## GHERKIN - BDD
### 1 - Login
CENARIO 1: Usuario entrou, tentou realizar o cadastro com o email e o sistema retornou que o email ja estava sendo utilizado <br />
- Given que esteja na pagina de login  <br /> 
- When que o usuario tentar realizar o cadastro com o email <br />
- Then o sistema retorna que o email já esta sendo utilizado <br />

### 2 - Login com falha de autenticação
CENARIO 2: Usuario entrou na página e ao digitar suas credenciais e logar o site retornou um erro de autenticação.  <br />
- Given que o usuário esteja na pagina de login   <br />
- When o usuario tentar realizar o login   <br />
- Then o sistema retorna uma falha de autenticação   <br />

### 3 - Recuperação de senha
CENARIO 3: Usuario entrou na página, digitou o email e clicou no "Esqueci minha senha", preencheu o email e um email foi disparado com sucesso.  <br />
- Given que o usuário esteja na pagina de login  <br />
- When o usuario tenta recuperar a senha de cadastro  <br />
- Then o sistema realiza a recuperação de senha com sucesso com a seguinte mensagem para o usuário "A confirmation email has been sent to your address" .  <br />

### 4 - Cadastro no Newsletter
CENARIO 4: Cadastro de usuario em newsletter
- Given que o usuário esteja na pagina de login <br />
- When  o usuario tenta se inscrever no newsletter  <br />
- Then o sistema retorna "Newsletter : Invalid email address." <br />


