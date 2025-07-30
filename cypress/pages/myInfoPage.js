class MyInfoPage {

    selectorsList() {
        const selectors = {
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
        
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(7).type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(8).type(sinNumber)
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('be.visible')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().thirdItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }
}

export default MyInfoPage