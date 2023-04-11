describe("login", () => {
    it("lets the user login and access their profile", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.wait(2000);
        cy.get(".btn-outline-success:visible").contains("Login").click();
        cy.wait(2000);
        cy.get("#loginEmail").type("monsterultra@stud.noroff.no");
        cy.wait (2000);
        cy.get("#loginPassword").type("123123123{enter}", { delay: 500 });
        cy.wait(2000)
        cy.visit("http://127.0.0.1:5500/?view=profile&name=monsterultra");
    })
})