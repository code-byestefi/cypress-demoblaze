export class CommonElements {

    static get topMenu() {
        return {
            get home() {
                return cy.contains('a','Home')
            },
            get contact() {
                return cy.contains('a', 'Contact')
            },
            get aboutUs() {
                return cy.contains('a', 'About us')
            },
            get cart() {
                return cy.contains('a', 'Cart')
            },
            get login() {
                return cy.contains('a', 'Log in')
            },
            get signUp() {
                return cy.contains('a', 'Sign up')
            },
            get logOut() {
                return cy.get('#logout2')
            }
        }
    }

    static get signedUser() {
        return cy.get("a#nameofuser");
    }

}