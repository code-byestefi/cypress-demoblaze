import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLink(productName) {
       return CartElements.links.delete(productName).click();
    }
}