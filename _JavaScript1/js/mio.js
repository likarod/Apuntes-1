// ******** / 15/07/2020 / 1 - CONOCER LAS VARIABLES *********/////
//  alert ('Estamos conectadas!');
// console.log("Estamos conectadas.");

// document.write("Hola, ¿qué tal?")

// // Declarar elementos a utilizar + inicializar una variable.//

// var nombre= prompt("Insetar un nombre");
// var apellido= prompt ("Insertar apellidos");
// // prompt se utiliza para solicitarle algo al usuario final como una ventana de "aviso"//
// var fechaNacimiento= prompt("Insertar fecha")
// var edad = 0;

// // Ejecutar el programa. ¿Qué necesitas? //
// // console.log(nombre, apellido, fechaNacimiento)//
// var apellido= prompt ("Insertar apellidos");

// document.write(
//     "<strong>" + 
//     apellido + 
//     "</stro>");

// var num1 = parseInt (prompt ("Insertar número"));
// var num2 = parseInt (prompt("interstar número"));
// parse = Parchea o convierte -> Int (coje números enteros) Float (también toma los números decimales)
// var resultado = num1 + num2;

// document.write(
//     "Has sumado el numero " + 
//     num1 +  
//     " junto con el número " + 
//      num2 + 
//     ", cuyo resultado es: " +  
//      resultado 
// );
// console.log(resultado);

// if(num1>num2)

//************/ 15/07/20 - 2. DECLARACION DE VARIABLES  //*********/

// var pregunta = prompt ("¿Qué quieres estudiar?");
// var Elección1 = "FullStack";
// var Elección2 = "Diseño" ;
// var Elección3 = "Data";

// También se pondría así: if (pregunta === "FullStack") || (pregunta === "FSD") { .... ;} //s 
// if (pregunta === Elección1) {
//     alert("Estudia FullStack");
//  }   
// else if (pregunta === Elección2) {
//     alert("Estudia Diseño UX/UI");
// }
// else if (pregunta === Elección3) {
//     alert("Estudia Data Science");
// }
// else{
//     alert("Lo sentimos, no tenemos ese curso");
// }

// ******** GENERACION DE BUCLES ******** //// 

// 1. SWITCH //
// var pulsado = prompt("Pulsa un botón del ascensor");
// switch(pulsado){
//     case "1":
//         alert("Planta 1: Cafetería");
//         break;
//     case "2":
//          alert("Planta 2: Serrucho");
//         break;
//     case "3": 
//         alert("Planta 3: Mitocondria");
//         break
//     case "4":
//         alert("Planta 4: Retina");
//         break;
//     default:
//         alert("Ese número te lo has inventado");
// }

// 2. WHILE //

var pulsado = parseInt(prompt("Pulsa un botón del ascensor"));

do {
    switch(pulsado){
        case "1":
            alert("Planta 1: Cafetería");
            break;
        case "2":
             alert("Planta 2: Serrucho");
            break;
        case "3": 
            alert("Planta 3: Mitocondria");
            break
        case "4":
            alert("Planta 4: Retina");
            break;
        // default:
        //     alert("Ese número te lo has inventado");
    }
    
} while (pulsado >= 0 && pulsado <= 9);

