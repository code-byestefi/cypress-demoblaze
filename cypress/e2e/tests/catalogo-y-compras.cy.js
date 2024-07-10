import { CommonData } from "../pages/common/common.data"
import { CommonMethods } from "../pages/common/common.methods"
import { Logger } from "../util/logger"
import { LoginMethods } from "../pages/login/login.methods";
import { LoginData } from "../pages/login/login.data";
import { HomeMethods } from "../pages/home/home.methods";
import { ProductDetailMethods } from "../pages/productDetail/productDetail.methods";
import { CartMethods } from "../pages/cart/cart.methods";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { PlaceOrderData } from "../pages/place-order/placer-order.data";
import { ThankYouForYouPurchaseMethods } from "../pages/thank-you-for-you-purchase/thank-for-you-for-purchase.methods";


describe(CommonData.testSuites.catalogoYCompra, () => {

    const user = LoginData.validCredentials;
    const product = 'ASUS Full HD'

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

        Logger.postCondition('Hacer log out')
        CommonMethods.logout();

    })

    it('Agregar producto al carrito', ()=> {

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

        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto especifico')
        HomeMethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto')
        ProductDetailMethods.verifyProductDetailsPageDisplayed()

        Logger.stepNumber(6)
        Logger.step('Hacer click en el boton "Add to cart"')
        ProductDetailMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailMethods.verifyProductAddedMessage();
        CommonMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

        Logger.postCondition('Limpiar el carrito')
        CartMethods.clearCart(user.username, user.password);
        cy.wait(50000)
        CommonMethods.logout();
    })


    it('Realizar una compra', ()=> {

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

        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto especifico')
        HomeMethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto')
        ProductDetailMethods.verifyProductDetailsPageDisplayed()

        Logger.stepNumber(6)
        Logger.step('Hacer click en el boton "Add to cart"')
        ProductDetailMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailMethods.verifyProductAddedMessage();
        CommonMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)


        Logger.stepNumber(8)
        Logger.step('Hacer click en la opcion "Cart" de la barra de navegacion')
        CommonMethods.clickOnCartOption();

        
        Logger.stepNumber(9)
        Logger.step('Verificar que se muestre la pagina del carrito de compras')
        CartMethods.verifyCartPageIsShow();

        Logger.stepNumber(10)
        Logger.step('Hacer click en el boton "Place Order!"')
        CartMethods.clickOnPlaceOrderButton();

        Logger.stepNumber(11)
        Logger.step('Completar los campos obligatorios en la página de información de envio')
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData);

        Logger.stepNumber(12)
        Logger.step('Hacer click en el boton Purchase')
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(13)
        Logger.step('Verificar que se muestre el mensaje de confirmacion y se redirige al usuario a la pagina de inicio')
        ThankYouForYouPurchaseMethods.verifyGreenCheckMark();
        cy.wait(3000);
        ThankYouForYouPurchaseMethods.clickOnOkButton();
        HomeMethods.verifyHomePageShown();

    })

})