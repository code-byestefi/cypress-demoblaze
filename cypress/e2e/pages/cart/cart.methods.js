import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLink(productName) {
       return CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName) {
        CartElements.links.delete(productName).should('be.visible')
    }

    static verifyCartPageIsShow() {
        cy.url().should('include','cart.html')
    }

    static clickOnPlaceOrderButton() {
        CartElements.buttons.placeOrder.click();
    }
}