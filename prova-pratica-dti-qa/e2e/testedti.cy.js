/// <reference types="cypress" />


describe('Visita', () => 
    // CENARIO 1: Usuario entrou, tentou realizar o cadastro com o email e o sistema retornou que o email ja estava sendo utilizado
    // Dado que esteja na pagina de login 
    // Quando que o usuario tentar realizar o cadastro com o email
    // Entao o sistema retorna que o email já esta sendo utilizado
    {
    it('Fazer Cadastro', () => {
        cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
        cy.get('#email_create').type('teste@hotmail.com')
        cy.get('#SubmitCreate > span').click()
        
    // CENARIO 2: Usuario entrou na página e ao digitar suas credenciais e logar o site retornou um erro de autenticação.
    // Dado que esteja na pagina de login 
    // Quando o usuario tentar realizar o login 
    // Entao o sistema retorna uma falha de autenticação 
    cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
    cy.get('#email').type('teste2@gmail.com')
    cy.get('#passwd').type('123456')
    cy.get('#SubmitLogin > span').click()

    // CENARIO 3: Usuario entrou na página, digitou o email e clicou no "Esqueci minha senha", preencheu o email e um email foi disparado com sucesso.
    // Dado que esteja na pagina de login
    // Quando o usuario tenta recuperar a senha de cadastro
    // Entao o sistema realiza a recuperação de senha com sucesso.
    cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
    cy.get('#email').type('teste2@gmail.com')
    cy.get('.lost_password > a').click()
    cy.get('#email').type('teste2@gmail.com')
    cy.get('.submit > .btn > span').click()

    // CENARIO 4: Cadastro de usuario em newsletter
    // Dado que esteja na pagina de login
    // Quando o usuario tenta se inscrever no newsletter 
    // Entao o sistema retorna "Newsletter : Invalid email address."
    cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
    cy.get('#newsletter-input').type('teste3gmail.com')
    cy.get('.form-group > .btn').click()

    });
});