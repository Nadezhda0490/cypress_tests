import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      openLoginPage(): Chainable<void>;
    }
    interface Chainable {
      openSignUpPage(): Chainable<void>;
    }
    interface Chainable {
      getTitle(): Chainable<void>;
    }
    interface Chainable {
      showSearchField(): Chainable<void>;
    }
    interface Chainable {
      switchToAllBrands(): Chainable<void>;
    }
  }
}
