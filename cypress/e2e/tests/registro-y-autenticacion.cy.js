import envmap_common_pars_fragmentGlsl from "three/src/renderers/shaders/ShaderChunk/envmap_common_pars_fragment.glsl.js"
import { CommonData } from "../pages/common/common.data"
import { CommonMethods } from '../pages/common/common.methods';
import { Logger } from "../util/logger"
import { SignUpMethods } from "../pages/signup/signup.methods"

describe(CommonData.testSuites.registroYAutenticacion, () => {

    it('Registro de usuario válido', ()=> {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sign Up" en la barra de búsqueda')
        CommonMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar los campos obligatorios con información válida')
        SignUpMethods.insertUsername('eititest');
        SignUpMethods.insertPassword('testpass');

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sign up" para registrar el usuario')
        SignUpMethods.clickOnSignUpButton();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestre el mensaje "Sign up successul"')
        SignUpMethods.verifySignupSuccessfulMessageIsDisplayed();

        cy.wait(10000);

    })
})