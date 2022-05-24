let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI= 3.14;
const TAU= 2 * PI;
let booleanoAnd = booleano1 == booleano2
    console.log(booleanoAnd);
let booleanoNot = !booleano1;
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
let incrementarDesp = "2";
let resultadoDesp = incrementarDesp++;
let incrementarAntes = "2";
let resultadoAntes = ++incrementarAntes;

let contarHasta10_2;
for (contarHasta10_2 = 0;        contarHasta10_2 < 10; contarHasta10_2++) {
    console.log(contarHasta10_2);
}

let postI=0;
let postJ=0;
let i=0;

while(i<=10){
    postI += postJ++;
    i++;
    console.log(postI)
}

let sumaPares = 0;
i=0; 
while (i<10) {
    if(i % 2 === 0)
        sumaPares += i
    i++
}

let variableValorNumerico = 4;
const MiNombre = "nombre";
const MiNumeroFav = 4;
let booleanoOr = booleano1 || booleano2;
let booleanoMix1 = (booleano1 && (TAU/2 == PI)) || (variableValorNumerico >= MiNumeroFav);

let seisNoEsNueve = (6!==9);
let booleanoMix2 = (variableValorNumerico > 0) < (MiNumeroFav*TAU);
let valorSuma = (MiNumeroFav + variableValorNumerico);
let valorResta = (MiNumeroFav - variableValorNumerico);
let valorMultiplicacion = (MiNumeroFav * variableValorNumerico);
let valorDivision = (MiNumeroFav/3);

let contarHasta10 = 0;
while (contarHasta10 < 10){
    contarHasta10++;
}

let preI=0;
let preJ=0;
let b=0;
while ( b <= 10){
    preI += ++preJ;
    b++;
}

let sumaImpares = 0;
i=0
while(i<10){
    if(i%2 ===1)
    // Esto se realiza para cuando se quiera generar un módulo de resultado Impar. Es decir, que SÓLO pueden entrar en la condicon aquellos que cuyo resto sea el impar.
    sumaImpares += i;
    i++
}