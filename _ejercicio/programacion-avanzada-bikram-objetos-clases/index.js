/* - [ ] 1.- Crea el **objeto Coche** con las siguientes **propiedades: marca, modelo y matricula** y los **métodos: acelerar {imprimirá por consola "a todo gas"} y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}** */

let Coche = {
    "marca": "Let",
    "modelo": "Renaul",
    "matricula": "13563ACD",
    "acelerar": ()=> console.log("a todo gas"),
    "frenar": () => console.log("cuidado con la abuelita en el paso de cebra")
}

/*
- [ ] 2.- Crea la **clase Turismo** con las siguientes **propiedades: marca, modelo y matricula declaradas en el constructor** y los **métodos: acelerar {imprimirá por consola "a todo gas"} y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}** 
*/

class Turismo {
    constructor( marca, modelo, matricula) {
        this.marca = marca;
        this.modelo = modelo;
        this.matricula = matricula;
    }

    acelerar () {
        console.log("a todo gas");
    }

    frenar () {
        console.log("cuidado con la abuelita en el paso de cebra");
    }
}

/*
- [ ] 3.- Crea una nueva **instancia de Turismo (una instancia se crea con new Turismo(/*Valores de las propiedades*) llamada 'miTurismo' cuyas **propiedades sean: marca: "Asiento", modelo: "Leon", matricula: "1234AAA" 
*/

let miTurismo = new Turismo ("Asiento","Leon","1234AAA");


/* - [ ] 4.- Crea una nueva **instancia de Turismo (una instancia se crea con new Turismo(/*Valores de las propiedades*)** llamada **miSegundoTurismo** cuyas **propiedades sean: marca: "Vuelve", modelo: "XC90", matricula: "1540GAB"** 
*/

let miSegundoTurismo = new Turismo ("Vuelve", "XC90", "1540GAB");

/*
- [ ] 5.- Crea una nueva **clase Persona** con las siguientes **propiedades: nombre, apellidos, edad, gustosMusicales** y los **métodos: envejecer {aumentará en 1 la edad}, nuevoGusto {aceptará como argumento un string y lo añadirá al array gustosMusicales}** 
*/

class Persona {
    constructor (nombre, apellidos, edad, gustosMusicales) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.gustosMusicales = gustosMusicales;
    }
    envejecer () {
        this.edad++;
    }

    /*
     Quiero la edad del objeto, no de la variable, ya que el sólo la variable existe dentro de este scope 
    */

    nuevoGusto (gustosMusicales) {
        this.gustosMusicales.push (gustosMusicales);
        /*
        Se llama a la función de gustosMusicales que está dentro del constructor. 
        Asimismo, se llama al objeto dentro que es el que se le añade el push. 
        */
    }
}
// let Persona2 = new Persona ("lina","NOSE", 3232322, []);
// Persona2.nuevoGusto("bailar");

/*
- [ ] 6.- Crea una nueva **instancia de Persona** llamada **rockero** cuyas **propiedades sean: nombre: "Freddie", apellidos: "Mercury", "edad": 45, gustosMusicales: ["Queen", "AC/DC"]**
*/

let rockero = new Persona ("Freddie","Mercury", 45, ["Queen" , "AC/DC"]);

/*
- [ ] 7.- Crea una **función aplicar__nuevoGusto** que añada a **rockero el gustoMusical "My Chemical Romance"**  Que no te despiste que se pida una función, solo es para poder pasar el test, **aprovecha el método nuevoGusto**
*/

let aplicar__nuevoGusto = () => {rockero.nuevoGusto("My Chemical Romance")};

/*
- [ ] 8.- Crea un **array Perro** que contenga los **valores: [nombre, raza, función popo {devuelve ("Ha hecho", Math.random() * 3, "caquitas")}]** 
*/

let Perro = ["nombre", "raza",() => "Ha hecho " + Math.random()*3 + " caquitas" ];

/*
- [ ] 9.- Crea el **objeto Perrito** con las **propiedades: nombre, raza** y el **método popo {devuelve ("Ha hecho ", Math.random() * 3, "caquitas")}**
*/

let Perrito = {
    "nombre": "Lucky",
    "raza": "Caniche",
    "popo": () => `Ha hecho ${Math.random() * 3} caquitas`
}

/*
- [ ] 10.- Crea la **clase Perrazo** con las **propiedades: nombre, raza** y el **método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}**
*/

class Perrazo {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }

    popo () {
        return `Ha hecho ${ Math.random () * 3} caquitas`
    }
}

let lebrelazo = new Perrazo ("Gus","Lebrel");

/*
- [ ] 12.- Crea la **clase Husky que extienda la clase Perrazo** (class Husky extends Perrazo) y añade la **propiedad: heterocromia (booleano), la propiedad raza siempre será "Husky"** y el **método tieneHeterocromia (imprime por console "si" o "no" en base a la propiedad heterocromia)**
*/

class Husky extends Perrazo {
    constructor (nombre, heterocromia) {
        super (nombre,"Husky") 
        this.heterocromia = heterocromia;
    }

    tieneHeterocromia () {
        if(this.heterocromia) 
        console.log("si")
        else console.log("no");
    }
}

/*
- [ ] 13.- Crea una nueva **instancia de Husky** llamada **miHusky** cuyas **propiedades sean: nombre: "Alaska", "heterocromia": true**
*/
let miHusky = new Husky ("Alaska", true);

/*
- [ ] 14.- Crea la **clase Coordenadas** con las **propiedades: x, y**
*/

class Coordenadas {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

/*
- [ ] 15.- Crea la **clase Jugador** con las **propiedades: posicion (instancia de coordenadas), fuerza, velocidad (instancia de coordenadas), direccion (instancia de coordenadas) vida** y los **métodos: moverse {posicion.x += velocidad.x * direccion.x, posicion.y += velocidad.y * direccion.y}, perderVida {vida -= 1}**
*/

class Jugador {
    constructor (posicion, fuerza, velocidad, direccion, vida) {
        this.posicion = posicion;
        this.fuerza = fuerza;
        this.velocidad = velocidad;
        this.direccion = direccion;
        this.vida = vida;
    }

    moverse () {
        this.posicion.x += this.velocidad.x * this.direccion.x;
        this.posicion.y += this.velocidad.y * this.direccion.y;
    }

    perderVida () {
        this.vida -= 1;
    }
}

/*
- [ ] 16.- Crea un **array de instancias de Jugador** llamado **jugadores**
*/

let jugadores = [new Jugador (2,5,154, 35, 100), new Jugador (3, 45, 231, 53646, 100)];

// Es importante añadirle valores.


/*
- [ ] 17.- Crea el **objeto FrameworksJavaScript** con la **propiedad: array frameworks** y el **método: generarFramework {añade al array frameworksJavaScript el string (randomString() + ".js")}**
*/

let FrameworksJavaScript = {
    "frameworks": [],
    "generarFramework": () => FrameworksJavaScript.frameworks.push(randomString() + ".js")
}

/*
- [ ] 18.- Crea la **clase Error_** con las **propiedades: codigo, descripcion, nombre** y el **método: imprimirError {se imprime a si mismo (this) por pantalla}**
*/

class Error_ {
    constructor (codigo, descripcion, nombre) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.nombre = nombre;
    }

    imprimirError () {
        console.log(this)
        /*
        Con this llamas a la clase en su totalidad.
        Dado que no existe una propiedad que se
        this.Erro_ 
        */
    }
}

class Huevera {
    constructor(huevosMaximos, huevos) {
        this.huevosMaximos = huevosMaximos;
        this.huevos = huevos;
    }

    comprarHuevos (num) {
        this.huevos += num
    }
}

/*
- [ ] 20.- Crea el **objeto Nevera** con las **propiedades: array productos** y el **getter numProductos {devuelve la suma del número de productos}**
*/

let Nevera = {
    "productos": [],
    get numProductos () {
        return this.productos.length; 
    }

}

/*
[ ] 21.- Crea el **objeto Congelador** con las **propiedades: array productos** y el **setter compra {acepta un array como argumento y añade cada elemento a this.productos}**
*/

let Congelador = {
    "productos": [],
    set compra (items) {
        this.productos.push(...items);
    }
}

// Congelador.compra = ["manzanzas", "peras", "cactus"]

/* 
- [ ] 22.- Crea el **objeto Pecera** con las **propiedades: array peces** y el **getter numPeces {retorna el número de peces}** y el **setter nuevosPeces {acepta como argumento un array y añade cada elemento a this.peces}**
*/

let Pecera = {
    "peces": [],
    get numPeces () {
        return this.peces.length;
    }, // Aquí retorno el número (o suma) de peces.

    set nuevosPeces (items) {
        this.peces.push(...items);
    }
}

/*
- [ ] 23.- Crea la **clase Lavavajillas** con las **propiedades: carga (objeto {platos: numPlatos, vasos: numVasos})**, el **setter nuevaCarga {acepatará como argumento un objeto {platos: numPlatos, vasos: numVasos} y actualizará carga, *para llamarlo se podrá utilizar el operador de propagación, si una variable queda sin definir, su valor no deberá cambiar*}**
*/

class Lavavajillas {
    constructor (carga){
       this.carga = carga 
    }
    
    set nuevaCarga (objeto){
         this.carga = {...this.carga,...objeto};
    }  
 
}

class ColeccionLibros {
    constructor(libros){
        this.libros = libros;
    }
    get ultimaAdquisicion () {   
        return this.libros[this.libros.length - 1];
    } 
    /* 
    El libro que esté en la última posición de los libros 
    */

}

class Humano {
    constructor(nombre, nacimiento){
        this.nombre = nombre;
        this.nacimiento = nacimiento;
    }

    get edad () {
        return (new Date().getFullYear() - this.nacimiento );
    }

    set edad(nuevaEdad) {
        this.nacimiento = new Date().getFullYear()- nuevaEdad;
    }
}

class Horno {
    constructor(horaInicio, ) {
        this.horaInicio = horaInicio
    }
}