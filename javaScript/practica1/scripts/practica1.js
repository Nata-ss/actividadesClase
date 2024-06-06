
/*
Ejercicio 1: Suma de dos números
    Escribe una función que solicite dos números al usuario, calcule la suma de esos números y muestre el resultado en un alert.
*/


let numeroUno = parseInt(prompt("Ingrese un número: "));
let numeroDos = parseInt(prompt("Ingrese un segundo número: "));
let resultadoSuma = numeroUno + numeroDos;
alert("EL RESULTADO DE LA SUMA ES: "+ resultadoSuma);


/*
    Ejercicio 2: Número par o impar
        Enunciado:
        Escribe una función que solicite un número al usuario y muestre en un alert si el número es "par" o "impar".
*/

let validarNumero = parseInt(prompt("Ingrese un número para validar: "));
let resultado = validarNumero / (2);

if (resultado == 0)
{
    alert("El numero es par");
}
else(resultado != 0)
    {
        alert("El numero es impar")
    }

  