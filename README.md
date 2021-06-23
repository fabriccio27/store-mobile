# Store mobile

## Recomendacion de testeo

* Clonar repositorio de [aca](https://github.com/fabriccio27/store-mobile) **de rama prueba**. 
```
git clone -b prueba https://github.com/fabriccio27/store-mobile.git store
```
* Ir con consola/terminal a store.
* Instalar dependencias con `npm install`. Va a usar las especificadas en `package.json`, que a mi me anduvieron y son practicamente las usadas en clase.

## Caracteristicas
- Apariencia moderna y ligera, evitando congestion de UI.
- Login manda a pantalla de credenciales invalidas si el input no es el correcto.
- Register checkea coincidencia de password y confirmacion de password, valida email precariamente y username no vacio.
- Hasta no cumplir condiciones de arriba no me dejar usar el boton de submit.
- Comportamiento de boton "Back" modificado en pantalla de usuario logueado.
- Agregado de botones en Header de navigation.
- Auth flow sigue sugerencia de las documentacion de `react-navigation 4.x` mediante uso de `createSwitchNavigation`.
- Uso de `TouchableOpacity` para crear botones a partir de imagenes o elementos de texto.
- Uso de `Modal` para acciones de confirmacion.
- Doy acceso a componentes que no son screen a propiedad `navigation` mediante `useNavigation` de `react-navigation`.
- Implementacion de pantalla de `loading` como wrapper de componentes, simulando tiempo de llamada a API externa.
- Imagenes se levantan usando hash table mappeando con parametro de navegacion a imagen

## Logica de Auth

- Se usa libreria AsyncStorage para escribir info de registros y estado de usuarios en JSON.
- En registro de usuario se genera hash de string combinacion de user y password, y se usa dicho hash como key para el AsyncStorage.
- Se usa hash function extraida de [acá](https://stackoverflow.com/a/52171480).
- En inicio de sesion se usa de nuevo combinacion de user y password para reproducir hash y buscar ese key en AsyncStorage. Si no lo encuentra, manda a credenciales invalidas (ya que no se habria generado durante el registro, y los hash son reproducibles, mismo user y password siempre generan el mismo hash).
- Si la autentificacion es exitosa, setea en state general (presente en App.js) el hash de la "sesion" actual.
- Se puede generar usuarios por `async-storage` y loguearse con esas credenciales

