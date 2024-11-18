describe('Homepage Test', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:3000'); // Your site URL
    cy.contains('ORDER NOW'); // Text on your homepage
  });
  
});
