// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginApi } from "../api/loginapi";

Cypress.Commands.add('login', function(useremail, userpassword){
    let res;

        loginApi.loginToApplication(this.users.validUseremail, this.users.validPassword)
            .then(function (response) {
                res = response
                

            })

        cy.visit("/editor", {

            onBeforeLoad(win) {
                win.localStorage.setItem("user", JSON.stringify(res))
            }

            
        })

})