describe('DemoQA - Automation Practice Form', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form', {
      failOnStatusCode: false
    })

    cy.get('form').should('exist')
    cy.removeAds()
  })

  it('Deve preencher o nome', () => {
    cy.get('#firstName', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .type('Wesley')
  })

})
