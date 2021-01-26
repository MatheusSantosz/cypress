Cypress.Commands.add('Login', () => {



    cy.visit('inoveteste.com.br/entrar');
    cy.get('#username-5743').type('matheus.santos.ciencia');
    cy.get('#user_password-5743').type('Cypress123');
    cy.get('#um-submit-btn').click();

});


Cypress.Commands.add('cadastro', () => {

    cy.visit('inoveteste.com.br/cadastro');
    cy.get('#user_login-5742').type('matheus.santos.cienciaa');
    cy.get('#first_name-5742').type('matheus');
    cy.get('#last_name-5742').type('santos');
    cy.get('#user_email-5742').type('matheus@doutordosono.com.br');
    cy.get('#user_password-5742').type('Mm0102030405');
    cy.get('#confirm_user_password-5742').type('Mm0102030405');
    cy.get('#um-submit-btn').click();

});

