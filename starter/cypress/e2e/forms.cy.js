// Test Create Set and Add Card forms
describe('Form tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should successfully submit Create Set form (happy path)', () => {
    cy.get('[data-cy="create-set-name"]').type('My Flashcards');
    cy.get('[data-cy="create-set-submit"]').click();

    // تحقق من أن رسالة نجاح ظهرت
    cy.contains('Set created successfully').should('be.visible');
  });

  it('should show error when submitting empty Create Set form (unhappy path)', () => {
    cy.get('[data-cy="create-set-name"]').clear();
    cy.get('[data-cy="create-set-submit"]').click();

    cy.contains('Please enter a name').should('be.visible');
  });

  it('should successfully submit Add Card form (happy path)', () => {
    cy.get('[data-cy="add-card-question"]').type('What is 2+2?');
    cy.get('[data-cy="add-card-answer"]').type('4');
    cy.get('[data-cy="add-card-submit"]').click();

    cy.contains('Card added successfully').should('be.visible');
  });

  it('should show error when submitting empty Add Card form (unhappy path)', () => {
    cy.get('[data-cy="add-card-question"]').clear();
    cy.get('[data-cy="add-card-answer"]').clear();
    cy.get('[data-cy="add-card-submit"]').click();

    cy.contains('Please fill out all fields').should('be.visible');
  });
});
