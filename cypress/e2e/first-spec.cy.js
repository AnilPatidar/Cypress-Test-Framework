describe('My First spec', () => {
  it('Validate example.cypress.io website', () => {
    cy.visit('/')
    //locate the elements
    //assert the things like text and other things.
    cy.contains("nextAll").click() //Implicit wait, assertions.
    Cypress.config('viewportHeight',1000)
    cy.url().should('include','/commands/traversal')
  })

  it('Validate example.cypress.io website', () => {
    cy.visit('/commands/traversal')
    
  })
  
})