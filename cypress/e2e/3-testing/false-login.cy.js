describe("login", () => {
    it("does not let the user login with invalid credentials and is shown a message", () => {
        // invalid email
        cy.visit("/");
        cy.wait(2000);
        cy.get(".btn-outline-success:visible").contains("Login").click();
        cy.wait(1000);
        cy.get("#loginEmail").type("fake.email@hhh.com");
        cy.wait (2000);
        cy.get("#loginPassword").type("jokesonyou{enter}", { delay: 500 });
        cy.wait(2000);

        // invalid password
        cy.visit("/");
        cy.wait(2000);
        cy.get(".btn-outline-success:visible").contains("Login").click();
        cy.wait(1000);
        cy.get("#loginEmail").type(Cypress.env("user-email"));
        cy.wait (2000);
        cy.get("#loginPassword").type("jokesonyou{enter}", { delay: 500 });

        cy.on("window:alert", message => {
            expect(message).to.eq(
              "Either your username was not found or your password is incorrect",
            );
        });
    });
})