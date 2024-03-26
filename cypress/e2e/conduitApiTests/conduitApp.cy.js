/// <reference types='cypress'/>

import { stringify } from "querystring"
import { loginApi } from "../../api/loginapi"

describe("API Testing", function () {

    beforeEach(function () {
        cy.fixture("users").then(function (users) {
            this.users = users
        })
    })

    it("Get Tags", function () {

        cy.request({
            method: 'GET',
            url: '/api/tags'
        }).then(function (response) {

            expect(response.status).to.equal(200)

            expect(response.body.tags).to.contain("Cypress")

            cy.log(stringify(response))

        })

    })

    it("Login to the application", function () {

        loginApi.loginToApplication(this.users.validUseremail, this.users.validUserpassword).then(function (response) {
            expect(response.status).to.equal(200)
        })

    })

    it("Add Article", function(){
        
    })
})