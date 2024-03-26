/// <reference types='cypress' />

import { articlePage } from "../../pages/articlespage"
import { loginpage } from "../../pages/loginpage"

describe("Intercepting calls", function(){


    it("Intercept Tags call", function(){

        //Starting the intercept
        cy.intercept({
            method: 'GET',
            url: "**/api/tags"
        },
        {
            fixture: "tagsResponse.json"
        }
        ).as("tagsApi")


        //Perform Action

        cy.visit("/")

        cy.wait("@tagsApi")

        cy.get("@tagsApi").then(function(xhr){

           

            expect(xhr.response.body.tags).to.contain("selenium")

        })

    })

    it("Verify Server error code", function(){

        //Starting the intercept
        cy.intercept({
            method: 'GET',
            url: "**/api/tags"
        },
        {
            statusCode: 500
        }
        ).as("tagsApi")


        //Perform Action

        cy.visit("/")

        cy.wait("@tagsApi")

        cy.get("@tagsApi").then(function(xhr){


           expect(xhr.response.statusCode).to.equal(500)

        })

    })

    it("Modify Request using intercept", function(){

        //Start Intercept
        cy.intercept({

            method: 'POST',
            url: '**/api/articles'

        }, function(req) {
            req.body.article.tagList = ["Cypress", "test automation", "Selenium"]
        }).as("productApi")

        cy.visit("/user/login")

        loginpage.loginToApplication("saurabh@fake.com", "fake")

        articlePage.navigateToArticlePage()

        articlePage.addArticle("Test Article", "Cypress", "About Cypress", "Cypress");

        cy.wait("@productApi").then(function(xhr){
            expect(xhr.response.body.article.tagList).to.contain("Selenium")

            console.log(xhr)
        })
    })
})