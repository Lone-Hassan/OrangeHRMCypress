class LoginPage
{

getUserName(){
    return cy.get("input[name='username']")
}
getPassword(){
    return cy.get("input[name='password']")
}
getloginBtn(){

    return cy.get("button[type='submit']")
}
getErrorMsg(){
    return cy.get(".oxd-alert.oxd-alert--error")
}
getForgotPassword(){
    //return cy.get(".orangehrm-login-forgot").contains("Forgot your password? ")
    return cy.contains("Forgot your password? ")
}
}
export default LoginPage