import { RACING_CATEGORIES } from "../config/constants";
describe('Category Filters', () => {
  it('Finds the options' , () => {
	cy.visit('');
    cy.contains('Thoroughbred');
	cy.contains('Greyhound');
	cy.contains('Harness');
  });
  
  it('Filter with different options', () => {
	  cy.visit('');
	  cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').click();
		  
        });
		
	  )};
	  )};
  )};
});
