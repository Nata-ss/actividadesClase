
//1. LO  PRIMERO ES VERIFICAR QUE LA VINCULACIÓN ES CORRECTA
// ENVIAMOS UN MENSAJE 


console.log('Hola! mundo-- Estoy vinculado con mi HTML');
//1. VARIABLES EN JS
/*DEFINICION-> ESPACIO DE MEMORIA -> CAJITA QUE ME GUARDA INFORMACION EN FORMA DE DATOS-> DIFERENTES TIPOS, NUMERICOS 2, 2.3, 3, 4.74534548, 
boleanos arreglos, texto (string), objetos)*/
//DEFINIRLO PARA USARLO CONSTANTEMENTE

/* 
variables en JS
1, VAR -> Nos guarda datos que pueden cambiar con el tiempo (en desuso)
2. LET-> nos guarda datos que pueden cambiar en el tiempo
3 CONST-> nos guarda datos constante -> no cambian en el tiempo
*/
//declaración de variables
/*
1. definir que tipo de valriable left o const 
2. darle nombre a la variable
3. decirle que guardara
*/
//let nombreVariable ='nombre';

// numericos

//let numero = 5;
//const pi = 3.14;

//texto ->

//let texto ='hola';
//const nombre='nata';

//booleano verdadero o falso

//let esVedadero =true;
//const esFalso= false;

//arreglos me permiten guardar mas de un dato-> del mismo  tipo
// se reconocen por el uso de los corchetes y los datos se separan por ,
//let arregloNumero = [1,2,3,4,5,6];
//const arregloNombres=['nata','Kevin','steven']


//POO -> Programación orientada a objetos
//Objetos -> son datos que representan en CÓDIGO, elementos o cosas de la vida real para que podamos darles instrucciones lógicas

//Todos los elementos de la vida real los podemos definir, en términos de CARACTERÍSTICAS (atributos (código)), de ACCIONES (métodos (código))

/*
    [] -> corchetes con los arreglos de datos
    {} -> llaves los tipos de datos objeto
    () -> métodos -> funciones

    estructura -> clave valor -> los atributos y métodos se separan por comas

    Yo puedo acceder no sólo al objeto completo, sino a sus propiedades y a sus métodos, de forma específica,

    Como:
    nombreObjeto.atributo
    nombreObjeto.método
*/
const persona1 ={
    //clave: valor;
    //ATRIBUTOS
    nombre: 'Luisa',
    edad: 23,
    altura: 170,
    nacionalidad: 'colombiana',
    //metodos son funciones 
    saludar: function(){
        console.log('hola desarrolladores')
    },
    despedir: function(){
        console.log('chao desarrolladores')
    }
}

let productos={
    nombre: 'computador',
    precio:'1000',
    cantidad:'20',
    descripcion:'es muy rapido',
    comprar: function(){
        console.log ('comprando articulos')

    }
}


// ==================== FUNCIONES =================

/*  
¿CÓMO SE USAN LAS FUNCIONES EN JS?

    1. Declaración típica de funciones
    2. Funciones anónimas -> a funciones sin nombre
    3. Funciones flecha -> los estándares modernos de programación en js

    4. Funciones incorporadas -> funciones que ya vienen establecidas dentro de js, para que nostros los podamos usar

*/

//1. DECLARACIÓN BÁSICA DE FUNCIONES
/* 
    function nombreFuncion(){
        lógica dentro de la funcion
    }

*/

function saludar(){
    console.log('holiiiiiiiiiiiiiiiiiiiiii');
}

//2. FUNCIONES ANÓNIMAS
let despedida = function (){
    console.log('chauuuuuuuuu')
}

//3. FUNCIONES FLECHA -> Forma moderna 

let suma = () => {
    console.log(5+4);
}

// 4. FUNCIONES INCORPORADAS
    /*
    
        alert -> enviarle un mensaje al usuario
        prompt -> es para pedir datos al usuario
        parseInt -> convertir un dato a entero
        parseFloat -> convertir un dato a flotante(decimal)
        console -> nos envía mensaje a la consola del desarrolador
        Math -> nos permite hacer operacione smatemáticas más complejas
    */