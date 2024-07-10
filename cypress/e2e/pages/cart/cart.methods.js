import { CommonMethods } from "../common/common.methods";
import { LoginMethods } from "../login/login.methods";
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

    static deleteProducts () {
        cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem')
        cy.get('a[onclick*="deleteItem"]').each(link=> {
            link.click()
            cy.wait('@deleteItem')
        })
    }

    static clearCart(username, password) {
        CommonMethods.navigateToDemoBlaze();
        CommonMethods.logout();
        CommonMethods.clickOnHomeOption(); 
        CommonMethods.clickOnLoginOption();
        LoginMethods.login(username,password)
        CommonMethods.clickOnCartOption()
        this.deleteProducts();
    }
    
}