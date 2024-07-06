import { HomeMethods } from "./pages/home/home.methods";

describe('template spec', () => {
  it('passes', () => {
    //const username = 'username';
    //const password = 'password';

    cy.visit('https://www.demoblaze.com/')
    //cy.get('a[data-target="#logInModal"]').click()

    HomeMethods.clickOnProductLink('Samsung galaxy s7');
    cy.wait(5000)

  })
})