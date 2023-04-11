describe("login", () => {
    it("does not let the user login with invalid credentials and is shown a message", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.wait(2000);
        cy.get(".btn-outline-success:visible").contains("Login").click();
        cy.wait(2000);
        cy.get("#loginEmail").type("monsterultra@hhhh.com");
        cy.wait (2000);
        cy.get("#loginPassword").type("jokesonyou", { delay: 500 });
    })
})