describe("basic (TypeScript test file)", () => {
  it("runs the app on port 3000", () => {
    cy.visit("http://localhost:3000");
    expect(true).to.equal(true);
  });
  it("runs a custom command", () => {
    cy.on("window:alert", (str: string) => {
      expect(str).to.equal(`Hello`);
    });
    cy.openAlert("Hello");
  });
});
