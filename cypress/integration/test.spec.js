/// <reference types="cypress"/>

it("should create a new user", () => {
    cy.createNewUser("Aziz", "Rehman", "i.azizrehman1@gmail.com", "Aziz@1996");

});
it("should not login with wrong credentails to the website", () =>{
   
    cy.Login('i.azizrehman1@gmail.com','Aziz@19')
    cy.contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.").should("exist")

})

it("should login to the website", () =>{

    cy.Login('i.azizrehman1@gmail.com','Aziz@1996')
    cy.contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.").should("not.exist")

})
it("should add product to the cart", () => {
    cy.addProductToCart();
    cy.contains("You added Overnight Duffle to your shopping cart.").should("exist")

})
//it("Checkout",()=>{
   // cy.get('.showcart').click()
   // cy.get('#top-cart-btn-checkout').click()
 //   cy.get('#customer-email-fieldset > .required > .control > #customer-email').type("i.azizrehman1@gmail.com")
  //  cy.get('#PF6EDX7').type("Aziz")
   // cy.get('#QRPS1DX').type("Rehman")
    //cy.get('#UMLLEKQ').type("GLC")
  //  cy.get('#OB82MNT').type("Johar town")
  //  cy.get('#A0BJ15B').type("Lahore")
   // cy.get('#name="region_id').click()
  //  cy.get('#CIR64CT').type("54000")
  //  cy.get('#UE7AA5S').type("123456789")
  //  cy.get(':nth-child(2) > :nth-child(1) > .radio').click()
  //  cy.get('.button').click()
  //  cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
   // cy.contains("Thank you for your purchase!").should("exist")

//})
it("should view cart", () =>{
    cy.get('.showcart').click()
    cy.get('#ui-id-1').should("exist")
    //cy.get('#ui-id-1').contains("You have no items in your shopping cart.").should("exist")
   // cy.contains("You have no items in your shopping cart.").should("exist")
})
