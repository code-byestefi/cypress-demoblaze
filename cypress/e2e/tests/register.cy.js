import envmap_common_pars_fragmentGlsl from "three/src/renderers/shaders/ShaderChunk/envmap_common_pars_fragment.glsl.js"
import { CommonData } from "../pages/common/common.data"
import { CommonMethods } from '../pages/common/common.methods';
import { Logger } from "../util/logger"
import { SignUpMethods } from "../pages/signup/signup.methods"

const user = CommonMethods.generateRandomString();
const password = CommonMethods.generateRandomString();
const existingUser = 'username';

describe(CommonData.testSuites.register, () => {

    it('Registro de usuario válido', ()=> {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sign Up" en la barra de búsqueda')
        CommonMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar los campos obligatorios con información válida')
        SignUpMethods.insertUsername(user);
        SignUpMethods.insertPassword(password);

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sign up" para registrar el usuario')
        SignUpMethods.clickOnSignUpButton();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestre el mensaje "Sign up successul"')
        SignUpMethods.verifySignupSuccessfulMessageIsDisplayed();

        cy.wait(1000);

    })

    it('Registro de usuario inválido', ()=> {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sign Up" en la barra de búsqueda')
        CommonMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar algunos cambos con información inválida')
        SignUpMethods.insertUsername(existingUser);
        SignUpMethods.insertPassword(password);

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sign up" para registrar el usuario')
        SignUpMethods.clickOnSignUpButton();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestre un mensaje de error indicando los campos inválidos')
        SignUpMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed();

        cy.wait(1000);

    })
})