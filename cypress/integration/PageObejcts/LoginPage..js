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
}
export default LoginPage