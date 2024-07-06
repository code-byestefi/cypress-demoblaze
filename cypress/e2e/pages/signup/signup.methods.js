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

}