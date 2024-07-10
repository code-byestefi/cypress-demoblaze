import { HomeElements } from "./home.elements";

export class HomeMethods {

    static clickOnPhonesOption() {
        HomeElements.categoriesMenu.phones.click();
    }

    static clickOnMonitorsOption() {
        HomeElements.categoriesMenu.monitors.click();
    }

    static clickOnLaptopsOption() {
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnProductLink(productName) {
        HomeElements.products(productName).click();
    }

    static verifyProductDisplay(productName) {
        HomeElements.products(productName).should('be.visible')
    }

    static verifyHomePageShown() {
        cy.url().should('include', 'index.html')
    }

}