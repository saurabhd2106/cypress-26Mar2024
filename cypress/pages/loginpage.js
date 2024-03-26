export class Loginpage {

    emailfield = "input[type='email']";

    passwordfield = "input[type='password']";

    signinText = "Sign in";


    loginToApplication(useremail, userpassword) {

        cy.get(this.emailfield).type(useremail)

        cy.get(this.passwordfield).type(userpassword)

        cy.contains('button', this.signinText).click()

    } 

    signup(){

    }

    forgetPassword(){

    }
}

export const loginpage = new Loginpage()