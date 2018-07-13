var variable=12;
var $variable
var _principal
var elemento=document.createElement('h2')
elemento.innerHTML="vinculado al codigo"
//impresion en consola
console.log(elemento)
var contenedor=document.getElementsByClassName('contenedor')
contenedor[0].appendChild(elemento)
console.log(contenedor)
/*for(var i;i<10;i++){

}*/
var arregloTexto = ["elem1","elem2","elem3","elem4","elem5"]
arregloTexto.forEach(function(interno){
    console.log(interno)
})
