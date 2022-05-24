let Coche = {
    "marca": "Seat Leon",
    "matricula": "010XCS",
    "modelo": "Híbrido",
};

let Casa = {
    "codPostal": "28025",
    "calle": "No me llames Dolores llámame Lola",
    "portal": 27,
    "piso": "3A"
}

let FullStackDeveloper = {
    "lenguajes": ["Javascript","CSS","HTML5"],
    "proyectos": ["Personal","Pair Programming","Grupal"],
}

let Perro = {
    "nombre": "Lucky",
    "raza": "Planetaria",
    "color": "Negro con blanco",
    "edad": "15 años",
    "ladrar": () => {console.log("Ladrido");},
    "popo": () => {return Math.random() * 3}
}
// -- 5
let marcaPortatil = Portatil.marca;

// --- 6
let marcaPortatil2 = Portatil["marca"];

// --- 7
let grupos = Concierto.grupos;

// ---8

let RGB = [Led.rojo, Led.verde,Led.azul];

// --- 9

Portatil.modelo = "P345";

// ---10.

Concierto.cartelera.push("Guns N' Roses");

// --- 11. 

Concierto.fecha= new Date();

// --- 12.

Impresora.imprimiendo = {"nombreArchivo":"", "copias":"","numPaginas":","};  

// ---- 13.
let Noticia = {
    "titular":"",
    "cuerpo":"",
}

// --- 14.

let Persona = {"nombre":"",
"apellidos":"","edad":"",}

// --- 15. 

let Avion = {
    "numPasajeros":"",
    "despegar":() => {console.log("despegando");},
    "volar":()=>{console.log("llegando al destino");},
    "aterrizar":()=> {console.log("aterrizando");}
}

// --- 16.

let Paquete = {
    "contenido": ["lapiz","papel","bolígrafos","estuches"]
}

// --- 17.

let Pais = {
    "numHabitantes":"",
    "continente":"",
    "gentilicio":"",
}

// --- 18.
let codError = O_Error.codigo 

//--- 19.

let integrantes = Grupo.integrantes;

// --- 20.

let nivelesTinta = Impresora.tinta;

// --- 21.

let pixeles = Pantalla.pixeles; 

// --- 22.

let especificaciones = Movil["especificaciones"];

// --- 23.

Grupo.numIntegrantes = 5; 

//  --- 24.

Pantalla.dimensiones = "1920x1080";

// --- 25. 

if(Led.encendido===false){
    Led.encendido=true;
} else{ Led.encendido=false;}

// Led.encendido = !Led.encendido --> El valor que está en la propiedad encendido cambiaría por su contario. 

// --- 26. 

Movil.temperatura = "20º"