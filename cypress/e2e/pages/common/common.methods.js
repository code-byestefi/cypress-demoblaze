import { CommonData } from "./common.data";
import { CommonElements } from "./common.elements";

export class CommonMethods{

    static navigateToDemoBlaze() {
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit(CommonData.url);
        CommonMethods.clickOnHomeOption();
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
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
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

    static logout() {
        cy.get('body').then($body => {
            if($body.find('#logout2[style="display: block;"]').length > 0 ){
                CommonElements.topMenu.logOut.click();
            }
        })
    }



}