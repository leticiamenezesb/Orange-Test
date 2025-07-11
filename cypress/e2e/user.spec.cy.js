import userData from '../fixtures/user.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='D, dd M yyyy']",
    genericCombobox: ".oxd-select-text--arrow",
    thirdItemCombobox: '.oxd-select-dropdown > :nth-child(3)',
    dateCloseButton: ".--close",
    submitButton: ".orangehrm-left-space",

  }

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstName Test')
    cy.get(selectorsList.middleNameField).clear().type('MiddleName Test')
    cy.get(selectorsList.lastNameField).clear().type('LastName Test')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmpTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('123Test')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-10-07')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()
  }) 
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})