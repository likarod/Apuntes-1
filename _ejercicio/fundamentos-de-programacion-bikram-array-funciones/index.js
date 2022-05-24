let arrayVacio = [];
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
let arrayNumerosPares = [0,2,4,6,8];
let arrayBidimensional = [[0,1,2],["a","b","c"]];

//  --- 5 ---
function suma(num1,num2){
   return (num1+num2);
}

// --- 6 ---
function potenciacion (num1,potenciaNum){
    let i=0;
    let resultado=1;
   while(i<potenciaNum){
    resultado=resultado*num1
    i++;
   }
    return (resultado)
}

// for(let i=0; i<potenciaNum;i++){ resultado=resultado*num1}

// --- 7 ---

function separarPalabras(palabra){
    return (palabra.split(" "))
}
separarPalabras("hola", "mundo");

// --- 8 ---
function repetirString (laPalabra, num1){
    let aux = laPalabra;
    let k=1;
    while(k < num1){
        aux += laPalabra
        k++
    } 
    return(laPalabra)
}

// ---- 9 ----
function esPrimo (num1){
    let divisor=num1-1;
    while(divisor>1){
        if(num1%divisor === 0){ return false;} 
        divisor--
    } 
    return true;
}
// --- 10 ----
function ordenarArray (array){ 
    return array.sort()
}
// --- 11 ---
function obtenerPares (array){
    let arrayPares=[];
    for(i=0; i<array.length;i++){
        if(array[i]%2 === 0){
            arrayPares.push(array[i])
        }
    } return arrayPares
}

// --- 12---

function pintarArray (cadena){
    
    cadena=cadena.join(", ");
    cadena="["+cadena+"]";
    // console.log( cadena)
    return cadena 
} 

// ---- 13 ---- 

// --- 14 ---
// fuction eliminarDuplicados (arrayDuplicado) {
//     let newArray=[];
//     for(let i=0;i<arrayDuplicado.length;i++){
//         let j=0;
//         let encontrado=false;
//         while(j<arrayDuplicado.length) {
//             if(arrayDuplicado[i]===arrayDuplicado[j])
//             encontrado=true;
//         }
//     }
// }

// --- 15 ---
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
// --- 16----
let holaMundo = ["Hola","Mundo"];
// ---- 17 ----
let loGuardoTodo = ['hola','que', 23, 42.33, 'tal'];
// --- 17 ----
let arrayDeArrays = [[756,'nombre'],[225,'apellido'],[298,"direccion"]];