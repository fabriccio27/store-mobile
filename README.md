# Store mobile

# Ver si puedo usar localStorage o algo parecido para recuperar de ahi

## Recomendacion de testeo

* Clonar repositorio de [aca](https://github.com/fabriccio27/store-mobile) **de rama auth-context**. 
```
git clone -b auth-context https://github.com/fabriccio27/store-mobile.git
```
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