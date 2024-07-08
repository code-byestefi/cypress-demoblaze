import { HomeElements } from "../home/home.elements";
import { CommonData } from "./common.data";
import { CommonElements } from "./common.elements";

export class CommonMethods{

    static navigateToDemoBlaze() {
        cy.clearCookies();
        cy.visit(CommonData.url);
    }

    static clickOnHomeOption() {
        CommonElements.topMenu.home.click()
    }

    static clickContactOption() {
        CommonElements.topMenu.contact.click()
    }

    static clickAboutUsOption() {
        CommonElements.topMenu.aboutUs.click()
    }

    static clickOnCartOption() {
        CommonElements.topMenu.cart.click()
    }

    static clickOnLoginOption() {
        CommonElements.topMenu.login.click()
    }

    static clickOnSignUpOption() {
        CommonElements.topMenu.signUp.click()
    }

    static verifyAlert(expectedMessage) {
        cy.on("window:alert", (str) => {
            expect(str).to.equal(expectedMessage);
        });
    }

}