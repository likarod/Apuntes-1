![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# :crossed_swords: Varita mágica #

## Introducción ##

Convertirás tu "pesé" en una electro-varita sembradora del caos en una página que te proveemos dentro del repositorio.

![](jarri.webp)

Mientras mueves el ratón y haces click sobre las cosas, irá haciendo cambios a su paso.

## Requisitos ##

- HTML

- CSS

- Javascript

- DOM API

## Iteraciones ##

En este repositorio tienes descargada y "aligerada" un post del conocido blog ["Coding Horror"](https://blog.codinghorror.com).

Todo está preparado para que puedas escribir en el archivo `scripts.js`

**_Todo ha de hacerse mediante Javascript._**

### Eventos ###

1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

    2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.

    2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

    2.3 Bloques de `article` o `section`: Cambia el color de fondo.

3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

    3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.

    3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

    3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.

_**Premium**_

![](https://media.giphy.com/media/tpTOw6sljB2U/giphy.gif)

4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

    ```javascript
    const colors = ['red', 'blue', 'green']

    const getRandom = (array) => {
        /* código misterioso */
    }

    console.log(getRandom(colors))
    // imprime 'red', 'blue' o 'green'
    ```
5. Utiliza la función creada `getRandom` para utilizar colores aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores.

6. Utiliza la función creada `getRandom` para utilizar _gifs_ aleatorios  en los apartados anteriores.
