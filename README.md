# Takeaway
Este proyecta esta generado con Angular CLI versión 12.2.6

## Descripción App (SPA)
Esta aplicación es una tienda online de comida para llevar. 

Compras online de menus

## Inplemantación
1. ### Sistema de login y registro
    * Formulario de inicio de sesión, permanencia de sesión (local storage) 
    * Fromulario de registro, nueva usuario almacenado en la base de datos
2. ### Sistema de generar los menus dinamicamente
    * Genera en la vista las Categorias
    * Genera en la vista los plato
3. ### Sistema de compra
    * Listado de los productos comprados por el usuario
    * Historial de las compras del usuario
    * Compra final con (`Stripe`)
4. ### Panel de control
    * Solo pueden acceder al panel de control los usuarios Admin  
    * Formulario crear, actualizar, eliminar usuarios `CRUD`
    * Formulario crear, actualizar, eliminar categorias `CRUD`
    * Formulario crear, actualizar, eliminar pedidos `CRUD`
    * Formulario crear, actualizar, eliminar platos `CRUD`
    * Documentación de la api res [postman](https://documenter.getpostman.com/view/1753340/RztitAB9) en desarrollo
    * Repositorio [Panel de control](https://bitbucket.org/devlitus/backendtakeaway) del takeaway 

## Servidor de desarrollo

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Producción

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

