# DemoBlaze - Cypress

Este proyecto tiene como objetivo diseñar un framework de testing para ejecutar pruebas automatizadas utilizando Cypress, implementando buenas prácticas de logging para asegurar que las pruebas automatizadas reflejen fielmente el comportamiento de los casos de prueba manuales.

## Características Principales

- Diseño de casos de prueba manuales.
- Implementación de testing framework utilizando POM (Page Object Model).
- Logging detallado para mejorar la comprensión de las pruebas automatizadas.
- Ejecución de pruebas en paralelo.
- Generación de reportes de pruebas utilizando Allure Report.
- Integración con CI/CD utilizando AWS para ejecuciones automáticas y hosteo de reportes en formato HTML.

## Diseño de Casos de Prueba Manuales

### Suite: Registro y Autenticación

#### Caso de Prueba 1: Registro de Usuario Válido
1. Navegar a la página de inicio.
2. Hacer clic en "Sign up" en la barra de navegación.
3. Completar todos los campos obligatorios con información válida.
4. Hacer clic en "Sign up" para registrar el usuario.
5. Verificar que se redirige al usuario a la página de inicio de sesión.

#### Caso de Prueba 2: Registro de Usuario Inválido
1. Navegar a la página de inicio.
2. Hacer clic en "Sign up" en la barra de navegación.
3. Completar algunos campos con información inválida.
4. Hacer clic en "Sign up" para registrar el usuario.
5. Verificar que se muestra un mensaje de error indicando los campos inválidos.

#### Caso de Prueba 3: Inicio de Sesión Válido
1. Navegar a la página de inicio.
2. Hacer clic en "Log in" en la barra de navegación.
3. Ingresar un nombre de usuario y contraseña válidos.
4. Hacer clic en "Log in" para iniciar sesión.
5. Verificar que se redirige al usuario a la página de inicio.

#### Caso de Prueba 4: Inicio de Sesión Inválido
1. Navegar a la página de inicio.
2. Hacer clic en "Log in" en la barra de navegación.
3. Ingresar un nombre de usuario y/o contraseña inválidos.
4. Hacer clic en "Log in" para iniciar sesión.
5. Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado.

### Suite: Catálogo y Compras

#### Caso de Prueba 1: Navegación por Categorías
1. Iniciar sesión como usuario registrado.
2. Navegar a la página de inicio.
3. Seleccionar una categoría de productos en el menú de navegación.
4. Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.

#### Caso de Prueba 2: Agregar Producto al Carrito
1. Iniciar sesión como usuario registrado.
2. Navegar a la página de inicio.
3. Seleccionar una categoría de productos en el menú de navegación.
4. Hacer clic en un producto específico.
5. Verificar que se muestra la página de detalles del producto.
6. Hacer clic en el botón "Add to cart".
7. Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.

#### Caso de Prueba 3: Realizar una Compra
1. Iniciar sesión como usuario registrado.
2. Navegar a la página de inicio.
3. Seleccionar una categoría de productos en el menú de navegación.
4. Hacer clic en un producto específico.
5. Verificar que se muestra la página de detalles del producto.
6. Hacer clic en el botón "Add to cart".
7. Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.
8. Hacer clic en el icono del carrito en la barra de navegación.
9. Verificar que se muestra la página del carrito de compras.
10. Hacer clic en el botón "Place Order".
11. Completar los campos obligatorios en la página de información de envío.
12. Hacer clic en el botón "Purchase".
13. Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio.

## Ejecución de Pruebas

Para ejecutar las pruebas automatizadas, sigue estos pasos:

1. Clona el repositorio.
2. Instala las dependencias utilizando npm:

   ```bash
   npm install

3. Ejecuta las pruebas utilizando Cypress:
   ```bash
   npm run cy:parallel


## Reporte de Pruebas
Después de ejecutar las pruebas, puedes generar un reporte detallado utilizando Allure Report. Sigue estos pasos:
1. Genera el reporte utilizando el siguiente comando:
   ```bash
   npm run generate-report

2. Abre el reporte en tu navegador:
   ```bash
   npm run open-report

