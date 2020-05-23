context('Actions', () => {
  it('Simple title checking', () => {
    cy.visit('http://localhost:4200/')
    cy.get('[data-layer="Welcome"]')
        .should('Welcome')
  })
})