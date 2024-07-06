import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('miUsuario', 'password123')
    cy.wait(5000)
  })
})