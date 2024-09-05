describe('Login', () => {

    const webPage = 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account'

    {
        it('Fazer Cadastro com email já utilizado', () => {
            // CENARIO 1: Usuario entrou, tentou realizar o cadastro com o email e o sistema retornou que o email ja estava sendo utilizado
            // Dado que esteja na pagina de login 
            // Quando que o usuario tentar realizar o cadastro com o email
            // Entao o sistema retorna que o email já esta sendo utilizado
            cy.visit(webPage)
            cy.get('#email_create').type('teste@hotmail.com')
            cy.get('#SubmitCreate > span').click()
            cy.get('#create_account_error')
                    .should('contain.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one.')
            

        });
        it('Login com falha de autenticação', () => {
            // CENARIO 2: Usuario entrou na página e ao digitar suas credenciais e logar o site retornou um erro de autenticação.
            // Dado que esteja na pagina de login 
            // Quando o usuario tentar realizar o login 
            // Entao o sistema retorna uma falha de autenticação 
            cy.visit(webPage)
            cy.get('#email').type('teste2@gmail.com')
            cy.get('#passwd').type('123456')
            cy.get('#SubmitLogin > span').click()

            cy.get('#center_column > :nth-child(2)')
                    .should('contain.text', 'Authentication')
        });

        it('Recuperação de senha', () => {
            // CENARIO 3: Usuario entrou na página, digitou o email e clicou no "Esqueci minha senha", preencheu o email e um email foi disparado com sucesso.
            // Dado que esteja na pagina de login
            // Quando o usuario tenta recuperar a senha de cadastro
            // Entao o sistema realiza a recuperação de senha com sucesso.
            cy.visit(webPage)
            cy.get('#email').type('teste2@gmail.com')
            cy.get('.lost_password > a').click()
            cy.get('#email').type('teste2@gmail.com')
            cy.get('.submit > .btn > span').click()

            cy.get('.alert')
                    .should('contain.text', 'A confirmation email has been sent to your address:')

        });



    }
});

describe('Newsletter', () => {

    const webPage = 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account'
    it('Cadastro Newsletter', () => {
        // CENARIO 4: Cadastro de usuario em newsletter
        // Dado que esteja na pagina de login
        // Quando o usuario tenta se inscrever no newsletter 
        // Entao o sistema retorna "Newsletter : Invalid email address."
        cy.visit(webPage)
        cy.get('#newsletter-input').type('teste3gmail.com')
        cy.get('.form-group > .btn').click()

        cy.get('.alert-danger')
                .should('contain.text', 'Newsletter : Invalid email address.')


    });
});
