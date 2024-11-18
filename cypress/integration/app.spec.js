describe('Homepage Test', () => {
    it('should load the homepage', () => {
      cy.visit('http://localhost:3000'); // replace with your site URL if different
      cy.contains('Welcome'); // verify text on your homepage
    });
  });
  