/// <reference types='cypress' />

const { loginApi } = require("../../api/loginapi")
const { articlePage } = require("../../pages/articlespage")
const { homepage } = require("../../pages/homepage")
const { loginpage } = require("../../pages/loginpage")

describe("Articles page tests", function () {

    before(function () {
        cy.fixture("users").then(function (users) {
            this.users = users;
        })
    })

    beforeEach(function () {

        //   loginpage.loginToApplication(this.users.validUseremail, this.users.validPassword)

        cy.login(this.users.validUseremail, this.users.validPassword)

    })


    it("Add Article", function () {


        // articlePage.navigateToArticlePage()

        articlePage.addArticle("Test Article", "Cypress", "About Cypress", "Cypress");

    })
})