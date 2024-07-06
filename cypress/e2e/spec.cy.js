import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const username = 'username';
    const password = 'password';

    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()

    LoginMethods.login(username, password)

    cy.get('a#nameofuser').should('contain.text', username)
    cy.wait(5000)
  })
})