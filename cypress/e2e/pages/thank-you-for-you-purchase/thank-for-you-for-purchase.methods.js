import { ThankYouForYouPurchaseElements } from "./thank-for-you-for-purchase.elements";

export class ThankYouForYouPurchaseMethods {

    static clickOnOkButton() {
        cy.wait(1000)
        ThankYouForYouPurchaseElements.button.ok.click()
    }

    static verifyGreenCheckMark() {
        ThankYouForYouPurchaseElements.icons.greenCheckMark.should('exist')
    }
    
}