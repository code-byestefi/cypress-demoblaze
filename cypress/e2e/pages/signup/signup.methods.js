import { CommonMethods } from "../common/common.methods";
import { SignUpElements } from "./signup.elements";

export class SignUpMethods {

    static insertUsername(username) {
        SignUpElements.textBoxes.username.invoke('val', username);
    }

    static insertPassword(password) {
        SignUpElements.textBoxes.password.invoke('val', password);
    }

    static clickOnSignUpButton() {
        SignUpElements.buttons.signUp.click();
    }

    static signUp(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignUpButton();
    }

    static verifySignupSuccessfulMessageIsDisplayed() {
        CommonMethods.verifyAlert("Sign up successful.");
    }

    static verifyThatThisUserAlreadyExistMessageIsDisplayed() {
        CommonMethods.verifyAlert("This user already exist.")
    }

}