class ResetPassword{

getUserName(){
    return cy.get("input[placeholder='Username']")
}

getResetBtn(){
    return cy.get("button[type='submit']")
}

getCacelBtn(){

    return cy.get("button[class*='--cancel']")
}
}
export default ResetPassword