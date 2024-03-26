export class Homepage{

    verifyYourFeedExistsAndIsVisible(){
        cy.contains("a", "Your Feed").should("be.visible").and("have.text", "Your Feed")
    }

    verifyNewArticleTextIsVisibleAndExists(){
        cy.contains("a", "New Article").should("be.visible")
    }
}

export const homepage = new Homepage()