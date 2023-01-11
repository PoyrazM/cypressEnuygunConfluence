import { faker } from '@faker-js/faker'

describe('Sign Up Tests', () => {
    
    it('Successfully Sign Up Test', () => {
        cy.visit('');
        cy.get('#ctx-RegisterBtn').click();
        cy.get('[name="_email"]').type(faker.internet.email());
        cy.get('.katalon__modal-password').type(faker.internet.password());
        cy.xpath('//*[@id="_acceptEmails"]').click();
        cy.get('.katalon__modal-register-button').click();
    });
});