var variable=12;
var $variable
var _principal
var contenedor=document.getElementsByClassName('contenedor')
//impresion en consola
//console.log(elemento)
console.log(contenedor)
var arregloTexto = ["elem1","elem2","elem3","elem4","elem5"]
var elementos=[]
for(var i=0;i<arregloTexto.length;i++){
    elementos.push(document.createElement('h2'))
    //var elemento=document.createElement('h2')
    elementos[i].innerHTML=arregloTexto[i]
    if(arregloTexto[i]=='elem1'){

    }else{
    contenedor[0].appendChild(elementos[i])
    }
    //elemento.innerHTML="vinculado al codigo"
    //contenedor[0].appendChild(elemento)
}
arregloTexto.forEach(function(interno){
    console.log(interno)
    /*tambien de esta manera
    elementos.push(document.createElement('h2'))
    elementos[i].innerHTML=arregloTexto[i]
    contenedor[0].appendChild(elementos[i])*/
})
/*tambien de esta manera
for (dato in arregloTexto){
    elementos.push(document.createElement('h2'))
    elementos[i].innerHTML=dato
    contenedor[0].appendChild(elementos[i])
}*/

var estado=false;
estado=(1 == 3);
estado = ("1" == 1);
estado = (false || true);
estado = (true && true);

var miFuncion=function(arg1,arg2,arg3){
    var respuesta=0;
    respuesta=arg1+arg2+arg3;
    return respuesta;
}

miResultado=miFuncion(10,20,30);
console.log(miResultado);

var callBack=function(numero,llamado){
    var respuesta=numero*1000;
    llamado(respuesta);
}
callBack(5,function(respuestaInterna){
    console.log(respuestaInterna);
});

var palindrome=function(texto){
    for(i=0;i<=texto.length-1;i++){
        if(!(texto[i]==texto[(texto.length-1)-i]))
        return false;        
    }
    return true;
}
console.log('palindrome='+palindrome('reconocer'));