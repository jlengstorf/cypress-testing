/// <reference types="cypress" />
it('loads the home page and navigates to about', () => {
  cy.visit('/');

  cy.contains('h1', 'This Page Is Tested');

  cy.get('[data-test]').click();

  cy.contains('h1', 'About');

  cy.get('.load-character').click();

  cy.get('.loaded-data').within(() => {
    cy.get('h2').should('exist').and('not.contain', 'Want to see');
    cy.get('.character-image').should('exist');
  });
});
