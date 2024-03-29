// Variables o "estructuras de datos" => su misión es guardar estados y valores
// se definen con let o var y tienen tipo
// todas las variables en JS tienen que tener un valor, SIEMPRE. Si vos no le asignas uno,
// js asigna 'undefined' por vos.

// Tipado dinámico implicito

// dinamico -> significa que puede cambiar el tipo de la variable a lo largo del PROGRAMADOR
/*
        let myNumber = 12; // empieza siendo un numero
        myNumber = "una palabra"; // se convierte a una string
*/
// implicito -> significa que el programador no tiene que especificar el tipo de la variable
//              en ningun momento. Un ejemplo contrario seria C, donde por ejemplo pones: int a = 1;

let myBoolean = true; // Boolean type : true o false -> bool myBoolean = True;
let myNumber = 1.2; // Number type numero real matematico int mi_enetero = 2; float, double
let myString = "Maxi y 'Lucas' <3 >:C"; // String type se puede definir con comillas dobles o simples
let myOtherString = 'otra "string" ';
let myNull = null; // Null type
let lucas; // Undefined type => JAMAS DEBE SER USADO POR EL PROGRAMADOR

// console.log(lucas == null);

// Funciones o métodos => su misión es alterar el estado del proceso
// +, alert(), console.log()

// Las funciones tienen tres partes:

// Nombre, parametros de entrada, y salida.
// La unica parte no opcional, es decir, obligatoria, es el nombre.
// Las funciones son secciones de codigo o de programa que se encargar de hacer o modificar algo.
// Hay funciones definidas por el lenguaje y funciones que puede definir el programador

function imprimir_un_numero_mas_uno(numero, canal_de_salida) {
    // numero: int
    // canal_de_salida: function
    // canal_de_salida(numero + 1);
    // return: void

    // Example: 13, console.log(typeof canal_de_salida);
    
    canal_de_salida(suma(numero,1)); // alert(numero + 1);
}

function suma(a, b) {
    /* Docstring
    a: int
    b: int

    return: int
    */

    function suma_interna() {
        return a + b;
    }

    return suma_interna(a + b);
}


let resultado = suma;

// let resultado = console.log("Hola como va");

// tipo de resultado: undefined
// valor de resultado: undefined

// console.log(typeof resultado);

function show_number_on_html(number) {
    document.getElementById("title").innerHTML = number;
}

imprimir_un_numero_mas_uno(13, console.log);
imprimir_un_numero_mas_uno(13, show_number_on_html);
let valor_de_devuelto = imprimir_un_numero_mas_uno(13, console.log);
console.log("valor devuelto: ", valor_de_devuelto); // undefined

// let resultado = 1 + 2;

// Control de flujo
// if, for, while, do while, switch

// Scopes
