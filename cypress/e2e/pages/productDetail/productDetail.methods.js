import { CommonMethods } from "../common/common.methods";
import { ProductDetailElements } from "./productDetail.elements";

export class ProductDetailMethods {

    static clickOnAddToCartButton() {
        ProductDetailElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed() {
        ProductDetailElements.buttons.addToCart.should('be.visible')
    }

    static verifyProductAddedMessage() {
        CommonMethods.verifyAlert('Product added')
    }
}