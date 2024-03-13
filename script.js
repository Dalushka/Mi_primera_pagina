//alert("Hola este es mi Javascript");
//let nombre = "Dalushka"

//console.log (nombre)

//SELECCIONAR ELEMENTOS

let contenidoTítulo = "Nombre"

let titulo = document.querySelector(".logo .fuente")
titulo.innerHTML = contenidoTítulo

//CONDICIONALES 
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro";
}
else {console.log("no se cumple") }
