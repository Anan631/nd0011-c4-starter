// Test navigation between pages
describe('Navigation tests', () => {
  // قبل كل اختبار، نزور الصفحة الرئيسية
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should navigate to Card Sets page', () => {
    // نفترض أن عنصر القائمة يحتوي data-cy="nav-card-sets"
    cy.get('[data-cy="nav-card-sets"]').click();
    cy.url().should('include', 'cardSets'); // تحقق أن الـ URL تغير
    cy.contains('Card Sets'); // تحقق من وجود عنوان الصفحة
  });

  it('should navigate to About page', () => {
    cy.get('[data-cy="nav-about"]').click();
    cy.url().should('include', 'about'); 
    cy.contains('About'); 
  });

  it('should navigate to Home page', () => {
    cy.get('[data-cy="nav-home"]').click();
    cy.url().should('eq', 'http://localhost:1234/'); 
    cy.contains('Home'); 
  });
});
