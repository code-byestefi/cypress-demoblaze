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

    static generateRandomString(length=10) {
        let result = ''
        const characters = 'abcdefghijklmnñopqrstuvwxyz'
        const charactersLength = characters.length;
        let counter = 0;

        while(counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
            counter += 1;
        }
        return result;
    }

    static verifySignedUser(username) {
        CommonElements.signedUser.should('have.text', `Welcome ${username}`)
    }

    

}