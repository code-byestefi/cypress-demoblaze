import { CommonData } from "../pages/common/common.data"
import { CommonMethods } from "../pages/common/common.methods"
import { Logger } from "../util/logger"
import { LoginMethods } from "../pages/login/login.methods";
import { LoginData } from "../pages/login/login.data";
import { HomeMethods } from "../pages/home/home.methods";

describe(CommonData.testSuites.catalogoYCompra, () => {

    const user = LoginData.validCredentials;

    it('Navegación por categorias', ()=> {

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como un usuario registrado')
        Logger.subStep('Navegar a DemoBlaze')
        CommonMethods.navigateToDemoBlaze();
        Logger.subStep('Hacer click en "Log In"')
        CommonMethods.clickOnLoginOption();
        LoginMethods.login(user.username, user.password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.step('Selecionar una categoria productos en el menú de navegación')
        HomeMethods.clickOnMonitorsOption();

        Logger.verification('Verificar que se muestre la lista de productos correspondientes a la categoria seleccionada')
        HomeMethods.verifyProductDisplay('Apple monitor 24')
        HomeMethods.verifyProductDisplay('ASUS Full HD')

    })

})