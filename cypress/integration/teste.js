
describe('teste', () => {

    it('devem poder inserir os dados para contato', () => {
        /// comentando
        /// cy.get - busca um elemento
        /// .type - insere um texto
        cy.visit('inoveteste.com.br/contato');
        cy.get('#wpcf7-f616-p598-o1 > .wpcf7-form > .qodef-two-columns-50-50 > .qodef-two-columns-50-50-inner > :nth-child(1) > .qodef-column-inner > .wpcf7-form-control-wrap > .wpcf7-form-control').type('matheus');
        cy.get('#wpcf7-f616-p598-o1 > .wpcf7-form > .qodef-two-columns-50-50 > .qodef-two-columns-50-50-inner > :nth-child(2) > .qodef-column-inner > .wpcf7-form-control-wrap > .wpcf7-form-control').type('matheus.santos.ciencia@gmail.com');
        cy.get('#wpcf7-f616-p598-o1 > .wpcf7-form > :nth-child(3) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('oportunidade de trabalho');
        cy.get('#wpcf7-f616-p598-o1 > .wpcf7-form > :nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('hellow word, testando minha primeira pagina com script no cypress com cy.vist, cy.get e .type ');

        cy.get(':nth-child(5) > center > .wpcf7-form-control').click();
        cy.get('#wpcf7-f616-p598-o1 > .wpcf7-form > .wpcf7-response-output').should('have.text', 'Sua mensagem foi enviada com sucesso. Obrigado.');
        it('deve esperar a resposta', () => {


        });

    });



});