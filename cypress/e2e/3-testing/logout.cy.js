describe("logout", () => {
    it("logs out the user, and deletes token from localStorage", () => {
        cy.visit("/")
        
        // Log in user to get the logout option available
        cy.wait(2000);
        cy.get(".btn-outline-success:visible").contains("Login").click();
        cy.wait(2000);
        cy.get("#loginEmail").type("monsterultra@stud.noroff.no");
        cy.wait (2000);
        cy.get("#loginPassword").type("123123123{enter}", { delay: 500 });
        cy.wait(2000)

        // Clicking logout button
        cy.get("header").get(".btn-outline-warning:visible").contains("Logout").click();
    });
});