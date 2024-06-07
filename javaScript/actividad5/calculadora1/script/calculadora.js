// 1. Verificar si está vinculado
console.log('Hola, estoy funcionando');

//Cuando se va a manipular elementos del html desde su js, SIEMPRE, lo qprimero que hagan es traer esos elementos

//2. Traer mis elementos del html
//Declarando nuestras variables

//variables  globales

let numero1;
let numero2;
let pantalla;

//asignarle a mis variables los elementos de html
numero1 = document.getElementById('numero1').value;
numero2 = document.getElementById('numero2').value;
pantalla = document.getElementById('pantalla');



// concatenación -> texto + variable  o número -> algo que va en comillas y otra cosa que no va en comillas
//console.log('el elemento input numero 1 es: ' + numero1);
//NO ES CONCATENACIÓN
//console.log(5+6);
//SI ES CONCATENACIÓN
//console.log('5'+6);


function suma(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    let resultadosuma = parseInt(numero1)+parseInt(numero2);
        //cuando usamos el console -> sólo le decimos a js que vamos a usar variables -> pone el nombre de la variable SIN COMILLAS
        console.log(numero1);
        //usted quiere mostrar más de UNA variable al tiempo, debe separarlas con ,
        console.log(numero2, pantalla);
       pantalla.textContent = resultadosuma;    
} 
function resta(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    let resultadoresta = parseInt(numero1) - parseInt(numero2);
        //cuando usamos el console -> sólo le decimos a js que vamos a usar variables -> pone el nombre de la variable SIN COMILLAS
        console.log(numero1);
        //usted quiere mostrar más de UNA variable al tiempo, debe separarlas con ,
        console.log(numero2, pantalla);
        pantalla.textContent = resultadoresta;    
}
function multiplicacion(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
        //cuando usamos el console -> sólo le decimos a js que vamos a usar variables -> pone el nombre de la variable SIN COMILLAS
        console.log(numero1);
        //usted quiere mostrar más de UNA variable al tiempo, debe separarlas con ,
        console.log(numero2, pantalla);
        let resultadomultiplicacion = parseInt(numero1) * parseInt(numero2);
        pantalla.textContent = resultadomultiplicacion;    
}
function division(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
        //cuando usamos el console -> sólo le decimos a js que vamos a usar variables -> pone el nombre de la variable SIN COMILLAS
        console.log(numero1);
        //usted quiere mostrar más de UNA variable al tiempo, debe separarlas con ,
        console.log(numero2, pantalla);
        let resultadodivision = parseFloat(numero1) / parseFloat(numero2);
        pantalla.textContent = resultadodivision.toFixed (3);    

}