describe('DemoQA - Practice Form', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.removeAds()
  })

  it('Preenche formulário', () => {
    cy.fixture('user').then((user) => {
      cy.get('#firstName').type(user.firstName)
      cy.get('#lastName').type(user.lastName)
      cy.get('#userEmail').type(user.email)
      cy.get('label[for="gender-radio-1"]').click()
      cy.get('#userNumber').type(user.phone)
      cy.get('#dateOfBirthInput').click()
      cy.get('.react-datepicker__month-select').select('July')
      cy.get('.react-datepicker__year-select').select('1995')
      cy.get('.react-datepicker__day--007:not(.react-datepicker__day--outside-month)').click()
      cy.get('#currentAddress').type(user.address)
      cy.get('#subjectsInput').type('Maths{enter}')
      cy.get('label[for="hobbies-checkbox-1"]').click()
      cy.get('label[for="hobbies-checkbox-3"]').click()
      // Estado
      cy.get('#state')
        .scrollIntoView()
        .click()
        .find('input')
        .type('NCR{enter}')

      // Cidade
      cy.get('#city')
        .scrollIntoView()
        .click()
        .find('input')
        .type('Delhi{enter}')

      cy.get('#submit')
        .scrollIntoView()
        .click({ force: true })
      cy.get('.modal-content').should('be.visible')
      cy.contains('Thanks for submitting the form').should('be.visible')
    })
  })

})
