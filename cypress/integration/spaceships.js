describe("Spaceships", () => {
  it("renders", () => {
    cy.visit(Cypress.config("baseUrl"));
    cy.contains("Click for Spaceships");
  });
});

describe("Spaceships", () => {
  it("fetches data", () => {
    cy.get("[id=spaceships-button]").click();
    cy.contains("Millennium Hawk");
  });
});
