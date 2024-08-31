/// <reference types = "cypress"/>
import LoginPage from "../PageObejcts/LoginPage."


describe("Login Page Tests", () => {

    const LP = new LoginPage()
    beforeEach(() => {

       
        cy.visit(Cypress.env("url"))
        cy.fixture("logindata").as("logindata")

    })



    it("Login with valid credentials", function () {

        //const LP = new LoginPage()
        LP.getUserName().type(this.logindata.credentials.valid.username)
        LP.getPassword().type(this.logindata.credentials.valid.password)
        LP.getloginBtn().click()

        cy.url().should("include", "dashboard")
    })

    it("Login with Invalid credentials", function () {

        this.logindata.credentials.Invalid.forEach((invalidCredentials) => {
            LP.getUserName().type(invalidCredentials.username)
            LP.getPassword().type(invalidCredentials.password)
            LP.getloginBtn().click()
            LP.getErrorMsg().should("be.visible").and("contain","Invalid credentials")
            cy.url().should("include","login")
        })


    })


})
