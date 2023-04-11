describe("logout", () => {
    it("logs out the user", () => {
        cy.visit("/")

        // Log in user to get the logout option available
        cy.wait(2000);
        cy.get(".btn-outline-success:visible").contains("Login").click();
        cy.wait(2000);
        cy.get("#loginEmail").type(Cypress.env("user-email"));
        cy.wait (500);
        cy.get("#loginPassword").type(Cypress.env("user-password"), { delay: 500 });
        cy.wait(200)
        cy.get(".btn-success").contains("Login").click();
        cy.wait(2000);

        // Clicking logout button
        cy.get("header").get(".btn-outline-warning:visible").contains("Logout").click();
    });
});