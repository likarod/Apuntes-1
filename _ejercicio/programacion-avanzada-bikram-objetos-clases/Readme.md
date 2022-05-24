![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png  "logotipo de The Bridge")

# :european_castle: :crossed_swords: Bikram #

## Introducción ##
Un bikram es una combinación de 26 ejercicios de programación para perfeccionar la conexión entre el programador interior que llevas dentro y el alma del lenguaje de programación. Aprovecha los checkboxes en el enunciado para ir marcando que ejercicios llevas realizados.

Estas 26 pruebas cubren un espectro de dificultad incremental, dotada de tests que cubrirán la correcta resolución para ayudarte a encontrar posibles errores en tu código.

La soluciones a los bikrams deberán hacerse en **./index.js** y tienen que subirse a GitHub, además, deberá incluirse una captura de pantalla de los tests.

El objetivo de este bikram es ayudarte a adquirir los conocimientos de los objetos y clases.

A lo largo del Bikram nos referiremos como objetos a los objetos JSON {propiedad: valor}, como clases a Class x {} y como nueva Instancia a new x

## Iteraciones

### Nivel Básico ###

- [ ] 1.- Crea el **objeto Coche** con las siguientes **propiedades: marca, modelo y matricula** y los **métodos: acelerar {imprimirá por consola "a todo gas"} y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}**

- [ ] 2.- Crea la **clase Turismo** con las siguientes **propiedades: marca, modelo y matricula declaradas en el constructor** y los **métodos: acelerar {imprimirá por consola "a todo gas"} y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}**

- [ ] 3.- Crea una nueva **instancia de Turismo (una instancia se crea con new Turismo(/*Valores de las propiedades*/)** llamada **miTurismo** cuyas **propiedades sean: marca: "Asiento", modelo: "Leon", matricula: "1234AAA"**

- [ ] 4.- Crea una nueva **instancia de Turismo (una instancia se crea con new Turismo(/*Valores de las propiedades*/)** llamada **miSegundoTurismo** cuyas **propiedades sean: marca: "Vuelve", modelo: "XC90", matricula: "1540GAB"**

- [ ] 5.- Crea una nueva **clase Persona** con las siguientes **propiedades: nombre, apellidos, edad, gustosMusicales** y los **métodos: envejecer {aumentará en 1 la edad}, nuevoGusto {aceptará como argumento un string y lo añadirá al array gustosMusicales}**

- [ ] 6.- Crea una nueva **instancia de Persona** llamada **rockero** cuyas **propiedades sean: nombre: "Freddie", apellidos: "Mercury", "edad": 45, gustosMusicales: ["Queen", "AC/DC"]**

- [ ] 7.- Crea una **función aplicar__nuevoGusto** que añada a **rockero el gustoMusical "My Chemical Romance"**  Que no te despiste que se pida una función, solo es para poder pasar el test, **aprovecha el método nuevoGusto**

- [ ] 8.- Crea un **array Perro** que contenga los **valores: [nombre, raza, función popo {devuelve ("Ha hecho", Math.random() * 3, "caquitas")}]**

- [ ] 9.- Crea el **objeto Perrito** con las **propiedades: nombre, raza** y el **método popo {devuelve ("Ha hecho ", Math.random() * 3, "caquitas")}**

- [ ] 10.- Crea la **clase Perrazo** con las **propiedades: nombre, raza** y el **método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}**

- [ ] 11.- Crea una nueva **instancia de Perrazo** llamada **lebrelazo** cuyas **propiedades sean: nombre: "Gus", raza: "Lebrel"**

Como puedes observar, tanto los arrays como los objetos, como las clases sirven para resolver un mismo tipo de problemas, la diferencia reside en que los arrays no guardan las propiedades y métodos con nombre, solo con índice, a diferencia de los objetos y clases. Por otro lado, las clases permiten crear instancias del objeto inicial

### Nivel Intermedio ###

- [ ] 12.- Crea la **clase Husky que extienda la clase Perrazo** (class Husky extends Perrazo) y añade la **propiedad: heterocromia (booleano), la propiedad raza siempre será "Husky"** y el **método tieneHeterocromia (imprime por console "si" o "no" en base a la propiedad heterocromia)**

- [ ] 13.- Crea una nueva **instancia de Husky** llamada **miHusky** cuyas **propiedades sean: nombre: "Alaska", "heterocromia": true**

- [ ] 14.- Crea la **clase Coordenadas** con las **propiedades: x, y**

- [ ] 15.- Crea la **clase Jugador** con las **propiedades: posicion (instancia de coordenadas), fuerza, velocidad (instancia de coordenadas), direccion (instancia de coordenadas) vida** y los **métodos: moverse {posicion.x += velocidad.x * direccion.x, posicion.y += velocidad.y * direccion.y}, perderVida {vida -= 1}**

- [ ] 16.- Crea un **array de instancias de Jugador** llamado **jugadores**

- [ ] 17.- Crea el **objeto FrameworksJavaScript** con la **propiedad: array frameworks** y el **método: generarFramework {añade al array frameworksJavaScript el string (randomString() + ".js")}**

- [ ] 18.- Crea la **clase Error_** con las **propiedades: codigo, descripcion, nombre** y el **método: imprimirError {se imprime a si mismo (this) por pantalla}**

- [ ] 19.- Crea la **clase Huevera** con las **propiedades: huevosMaximos, huevos** y el **método comprarHuevos {acepta como argumento un número y añade ese número de huevos}**

### Nivel Premium ###

El nivel premium requerirá investigar sobre los requisitos

- [ ] 20.- Crea el **objeto Nevera** con las **propiedades: array productos** y el **getter numProductos {devuelve la suma del número de productos}**

- [ ] 21.- Crea el **objeto Congelador** con las **propiedades: array productos** y el **setter compra {acepta un array como argumento y añade cada elemento a this.productos}**

- [ ] 22.- Crea el **objeto Pecera** con las **propiedades: array peces** y el **getter numPeces {retorna el número de peces}** y el **setter nuevosPeces {acepta como argumento un array y añade cada elemento a this.peces}**

- [ ] 23.- Crea la **clase Lavavajillas** con las **propiedades: carga (objeto {platos: numPlatos, vasos: numVasos})**, el **setter nuevaCarga {acepatará como argumento un objeto {platos: numPlatos, vasos: numVasos} y actualizará carga, *para llamarlo se podrá utilizar el operador de propagación, si una variable queda sin definir, su valor no deberá cambiar*}**

- [ ] 24.- Crea la **clase ColeccionLibros** con la **propiedad array libros** y el **getter ultimaAdquisicion {devuelve el último elemento de this.libros}**

- [ ] 25.- Crea la **clase Humano** con las **propiedades: nombre y nacimiento** además, deberá tener un **getter edad {imprime por consola new Date().getFullYear() - nacimiento}** y un **setter edad(nuevaEdad) {cambiará nacimineto por Date().getFullYear() - nuevaEdad}**

- [ ] 26.- Crea la **clase Horno** con las **propiedades: horaInicio (instancia de Tiempo(horas, minutos) ya declarado en JS/functions.js)** y **horaFin (instancia de Tiempo(horas, minutos))**, el **getter tiempoPasado {devolverá ("Llevamos " + TiempoAString(new Tiempo(horaActual - horaInicio, minutoActual - minutoInicio)))** y el **getter tiempoRestante {devolverá ("Quedan " + TiempoAString(new Tiempo(horaFin - horaActual, minutoFin - minutoActual)))** }