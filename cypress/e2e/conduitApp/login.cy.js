/// <reference types= 'cypress' />

const { homepage } = require("../../pages/homepage")
const { loginpage } = require("../../pages/loginpage")

// This is a test collection or Test Suite
describe("Login Feature", function(){

    before(function(){

        cy.log("This method executes as the first method in the test suite")

    })

    after(function(){

        cy.log("This method executes as the last method in the test suite")

    })

    beforeEach(function(){

        cy.log("This method executes before every test method")
        
        cy.visit("/user/login")

        cy.fixture("users").then(function(users){
            this.users = users
        })

    })

    afterEach(function(){
        cy.log("This method executes after every test method")
    })

    it("Login test with correct credentials", function(){

        var useremail = this.users.validUseremail

        var userpassword = this.users.validPassword

       

        loginpage.loginToApplication(useremail, userpassword)

        homepage.verifyYourFeedExistsAndIsVisible()
        
        homepage.verifyNewArticleTextIsVisibleAndExists()

       

    })

    it("Login test with incorrect credentials", function(){

        var useremail = this.users.invalidUseremail

        var userpassword = this.users.invalidUserpassword

        

        loginpage.loginToApplication(useremail, userpassword)

       
        
    })

    it("Login test with empty credentials", function(){
        
    })

})