describe("login", () => {
    it("lets the user login and access their profile", () => {
        cy.visit("/");
        cy.wait(2000);
        cy.get(".btn-outline-success:visible").contains("Login").click();
        cy.wait(500);
        cy.get("#loginEmail").type(Cypress.env("user-email"));
        cy.wait (500);
        cy.get("#loginPassword").type(Cypress.env("user-password"), { delay: 500 });
        cy.wait(200)
        cy.get(".btn-success").contains("Login").click();
    })
})