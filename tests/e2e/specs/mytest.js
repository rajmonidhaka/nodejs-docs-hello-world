describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('/')
  })
  it('looks inside <title> tag', () => {
    cy.get('body').should('contain', 'Hello World! Howdy Everyone!!!')
  })
})
