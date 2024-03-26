/// <reference types='cypress' />

describe("Iframe and Mouse Handling", function(){


    beforeEach(function(){
        cy.visit("https://jqueryui.com/droppable/")
    })

    it("Drag and Drop with IFrame", function(){

        cy.get(".demo-frame").then(function(frame){

            const frameBody = frame.contents().find("body")

            cy.wrap(frameBody).find("#draggable").as("draggable")

            cy.wrap(frameBody).find("#droppable").as("droppable")

        })

        cy.get("@draggable").trigger("mousedown", {button: 0})

        cy.wait(2000)

        cy.get("@droppable").trigger("mousemove").trigger("mouseup", {force: true})

        cy.get("@droppable").then(function(element){
            cy.log(element.text())
        })
    })
})