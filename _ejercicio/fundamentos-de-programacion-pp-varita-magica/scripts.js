// 1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página. 

let pararClick = document.getElementsByTagName("a"); console.log(pararClick);
for(i=0;i<pararClick.length;i++){
    pararClick[i].onclick = (event) => {
        event.preventDefault();
    }
    // Para cada a que se recorre de i, cuando haga click, le digo que "event" deje de hacer lo que defecto tiene que hacer. 
}

// 2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.

let cambio = document.getElementsByTagName("img");
console.log(cambio);
for(i=0;i<cambio.length;i++){
    cambio[i].onclick = (event) => {
        event.target.src="assets/magic-5.gif"
    }
}

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let parrafoColor = document.getElementsByTagName("p");
console.log(parrafoColor);
for(let i=0; i<parrafoColor.length;i++){
    parrafoColor[i].onclick= (event) => {
        event.target.style.color= "pink";
        event.target.style.background = "violet";
    }
        
}

// 2.3 Bloques de `article` o `section`: Cambia el color de fondo.



/// 3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`. 

/*
let originalImages = [];
for (let i=0; i<originalImages.length;i++){
   originalImages.push(images[i].src);
 }
*/

for(let i=0; i<images.length;i++){
    let imagenPrimera = image[i].src;
    images[i].onmouseover = event => event.target.src = "assets/abracadabra.gif";
    images[i].onmouseout = event => event.target.src= imagenPrimera;
}