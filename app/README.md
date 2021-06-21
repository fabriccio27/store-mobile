# Store mobile
- Login manda a pantalla de credenciales invalidas si el input no es el correcto
- Register checkea coincidencia de password y confirmacion de password, valida email precariamente y username no vacio
- Hasta no cumplir condiciones de arriba no me dejar usar el boton de submit
- Comportamiento de boton "Back" modificado en pantalla de usuario logueado
- Agregado de botones en Header de navigation
- Auth flow sigue sugerencia de las documentacion de `react-navigation 4.x` mediante uso de `createSwitchNavigation`.
- Uso de `TouchableOpacity` para crear botones a partir de imagenes.
- Doy acceso a componentes que no son screen a propiedad `navigation` mediante `useNavigation` de `react-navigation`.