/// <reference types = "cypress"/>

import ResetPassword from "../PageObejcts/ResetPAssword"
import LoginPage from "../PageObejcts/LoginPage."
describe("Reset Password tests",function(){
    const LP = new LoginPage()
    const RP = new ResetPassword()

    beforeEach(()=>{
        cy.visit(Cypress.env("url"))
        LP.getForgotPassword().click()
    })


    
    it("Validat Navigation to Reset Password Page",function(){

        cy.url().should("include","requestPasswordResetCode")
    })

    it("canceling redirects to login page",function(){

        RP.getCacelBtn().click()
    })
})