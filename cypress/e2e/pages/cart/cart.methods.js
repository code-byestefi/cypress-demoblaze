import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLink(productName) {
       return CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName) {
        CartElements.links.delete(productName).should('be.visible')
    }
}