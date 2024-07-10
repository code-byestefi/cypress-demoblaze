import envmap_common_pars_fragmentGlsl from "three/src/renderers/shaders/ShaderChunk/envmap_common_pars_fragment.glsl.js"
import { CommonData } from "../pages/common/common.data"
import { CommonMethods } from '../pages/common/common.methods';
import { Logger } from "../util/logger"
import { LoginMethods } from "../pages/login/login.methods";
import { LoginData } from "../pages/login/login.data";

describe(CommonData.testSuites.autenticacion, () => {

    it('Iniciar Sesión con usuario válido', ()=> {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Log In" en la barra de búsqueda')
        CommonMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Completar los campos obligatorios con información válida')
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Log In" para registrar el usuario')
        LoginMethods.clickOnLoginButton();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se redirige al usuario a la página de inicio')
        CommonMethods.verifySignedUser(LoginData.validCredentials.username)

        Logger.postCondition('Hacer log out')
        CommonMethods.logout();

        cy.wait(1000);
    });

    it('Iniciar Sesión con usuario inválido', ()=> {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Log In" en la barra de búsqueda')
        CommonMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Completar los campos obligatorios con información inválida')
        LoginMethods.insertUsername(LoginData.invalidCredentials.username);
        LoginMethods.insertPassword(LoginData.invalidCredentials.password);

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Log In" para registrar el usuario')
        LoginMethods.clickOnLoginButton();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado')
        LoginMethods.verifyWrongPasswordMessage();
        
        cy.wait(1000);
    });
})