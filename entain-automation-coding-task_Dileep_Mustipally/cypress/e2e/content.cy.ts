import { RACING_CATEGORIES } from "../config/constants";

describe('Page Content', () => {
  it('Should correctly display page title', () => {
    cy.visit('');

    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  });

  it('Should have all filters checked by default', () => {
    cy.visit('');

    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
		  
        });
      })
    });
  });
  
  it('Should have race number visible', () => {
	  
	  cy.visit('');
	  cy.get('[race-number]').should('be.visible');
	  
  }); 
  
  it('Should have race name visible', () => {
	  
	  cy.visit('');
	  cy.get('[race-name]').should('be.visible');
	  
  });
  
  it('Should display 5 races in lists', () => {
    cy.visit('');
	cy.get('[race-name]').to.have.length(5)

    
  });
});
