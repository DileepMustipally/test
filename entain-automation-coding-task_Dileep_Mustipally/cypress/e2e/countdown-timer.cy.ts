describe('Countdown Timer', () => {
  cy.get('#timer').should(be.enabled)
  cy.get('#seconds-elapsed').should('have.text', 's')
});
