describe("Pilots", () => {
  it("renders", () => {
    cy.visit(Cypress.config("baseUrl"));
    cy.contains("Pilots");
    cy.contains("Spaceships");
  });
});

describe("Pilots", () => {
  it("can add a pilot", () => {
    cy.get("button").contains("Add Pilot").click();
    cy.get("input").invoke("attr", "placeholder").should("contain", "Name");
    cy.get("input").type("Test Pilot").should("have.value", "Test Pilot");
    cy.get("#pilots").find("button").contains("Add").click();
    cy.contains("Test Pilot");
  });
});

describe("Spaceships", () => {
  it("can add a spaceship", () => {
    cy.get("button").contains("Add Spaceship").click();
    cy.get("input")
      .first()
      .type("Test Spaceship")
      .should("have.value", "Test Spaceship");
    cy.get("input")
      .last()
      .type("Test Pilot")
      .should("have.value", "Test Pilot");
    cy.get("#spaceships").find("button").contains("Add").click();
    cy.contains("Test Spaceship");
  });
});

describe("Spaceships", () => {
  it("can delete a spaceship", () => {
    cy.get("div").contains("Test Spaceship").next().click();
    cy.contains("Test Spaceship").should("not.exist");
  });
});

describe("Pilots", () => {
  it("can delete a pilot", () => {
    cy.get("div").contains("Test Pilot").next().click();
    cy.contains("Test Pilot").should("not.exist");
  });
});
