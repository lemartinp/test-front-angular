# LealTest

Este proyecto fue creado con el propósito de cumplir con los criterios que me fueron enviados en la prueba técnica.

# Descripción funcional

### Home

En la pantalla inicial se puede ver un formulario para dos entradas de texto (email, password) y un botón para ingresar.
Si llega a faltar alguno de los campos del formulario y se presiona el botón, este mostrará un dialogo alertando al usuario que falta alguno de los dos parametros.
Si la contraseña o email llegan a ser equivocados, se mostrará otro dialogo indicandolo.
Además hay otro dialogo si llega a haber error interno del servidor al intentar ingresar.

### Dashboard

Una vez se ha ingresado con el usuario y contraseña enviados para la prueba, se mostrará un listado de las transacciones del usuario (Puntos de la transacción, fecha resumida).
Además de esto hay dos campos de ingreso de texto para poner la fecha de inicio y de fin para filtrar la busqueda de las transacciones que se muestran en pantalla. Una vez hecho un filtro la lista tarda 500ms en actualizarse.
Por último, al hacer click sobre una transacción se abre un dialogo mostrando el detalle de la transacción seleccionada. (Valor, puntos, tipo, fecha y hora).

# Descripción del código

El proyecto está compuesto de:

Componentes
- Home
- dashboard
- dialog
- app (default)

Servicios
- requests

Clases
- LoginData

#### Componentes

Los componentes Home y Dashboard se encargan de renderizar las dos pantallas mencionadas anteriormente con esos nombres.
El componente Dialog se encarga de renderizar todos los dialogos que se manejan en la aplicación, los tres de errores de login y el del detalle de la transacción. Esto lo hace mediante el parametro de entrada que se le envía a los MatDialogs llamado "data", de acuerdo a este se muestra una información diferente.

#### Enrutado

El proyecto tiene las diferentes rutas usadas en el archivo app-routing.module.ts y el componente App es el que tiene el "route-outlet".
Para los elementos visuales se hizo uso de Angular Material, el cual fue instalado y los módulos usados están en app.module.ts.

#### Servicios

El servicio Requests es el que se encarga de hacer las peticiones Http al API, este es inyectado a los componentes Home y Dashboard para que ellos simplemente hagan uso de sus funciones y rendericen la información obtenida. Notese que la función getTransactions tiene dos parametros condicionales para que esta pueda ser usada de las diferentes formas en que el endpoint está disponible.

La clase LoginData es solamente usada para hacer el post de login al API.

## Responsive

La aplicación fue desarrollada teniendo en cuenta que es Mobile First. Por lo cual, si se hace un resize de la pantalla podrá apreciarse lo responsive de la aplicación.