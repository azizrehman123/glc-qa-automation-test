Cypress.Commands.add("Login", (email, password) => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})
Cypress.Commands.add("addProductToCart", () => {
    cy.get('#ui-id-6 > .ui-menu-icon').click();
    cy.get('.categories-menu > .items > :nth-child(1) > a').click();
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#qty').type("1");
    cy.get('#product-addtocart-button').click({force: true});
    cy.get('#product-addtocart-button').click();
  });
  Cypress.Commands.add("createNewUser", (firstName, lastName, email, password) => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
  });
    
//Cypress.Commands.add('login', (email, password) => { 
 //}
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
