describe("drive2.ru - UI tests", function () {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"), {
      onBeforeLoad(win) {},
    });

    cy.get(".c-logo", { timeout: 10000 }).should("be.visible");
  });

  it("should display search field", () => {
    cy.showSearchField().should("exist");
  });

  it('should open Login page when clicking "Войти"', () => {
    cy.openLoginPage();
    cy.url().should("include", "/reception");
  });

  it('should open Sign Up page when clicking "Зарегистрироваться"', () => {
    cy.intercept("GET", "/signup/**").as("signupPage");

    cy.openSignUpPage();
    cy.wait("@signupPage").then((interception) => {
      expect(interception.response?.statusCode).to.equal(200);
    });
    cy.url().should("include", "/signup/");
  });

  it("should display main title", () => {
    cy.getTitle()
      .should("be.visible")
      .invoke("text")
      .should("match", /Человеческие\s+ответы\s+на\s+автомобильные\s+вопросы/);
  });

  it("should switch to All Brands tab", () => {
    cy.switchToAllBrands();
    cy.contains("Популярные").should("exist");
  });
});
