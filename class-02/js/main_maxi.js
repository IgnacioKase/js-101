/*
1) Read the following variable declarations and mark if they are correct and what type of variable they are. If the definition
is not correct, clarify why it isn't.

    a) let my_variable = 1542.2;
        -variable number
    b) var you_shoudnt_use_me = "What do you think?";
        -variable string
    c) awesome_variable = true;
        -no esta decladara como variable, le falta "let"/"var", si fuera una variable seria del tipo boolean
    d) let im_just_a_number = 12
        -el ";" es opcional y es del tipo number
    e) let $_i_like_money = undefined;
        -no es correcto usar undefined ya que es un valor que devuelve js y puede llevar a confuciones 
        y no estoy seguro de que este bien usar caracteres especiales para nombre de variables
        pd: segun una pagina si es valido, carita re fachera
    f) let 123_my_variable = null;
        -es incorrecto porque empieza por 123
    g) let i_dont_want_a_value = null
        -es correcto y es del tipo null 
    h) let i'm_a_variable = "just a variable";
        -es incorrecto por tener ' y si fuera correcto seria del tipo string

2) Read the following function definitions, mark if they are correct, and clarify if they have input parameters  and if they
have a return value.

    a)
        function this_is_my_first_function() {
            console.log("Hello world");
        }   // es correcta, no tiene parametros de salina ni de entrada pero impreme en pantalla "hello world"

    b)
        function im_just_a_sum(a, b) {
            return a + b;
        }   // es correcta, tiene paramatros de salida y de entrada

    c)
        function im_just_a_division(a, b) {
            a / b;
        }   // es correcta, pero al no tener parametro de salida tira undefined

    d)
        function im_just_a_product(a, b)
            return a * b;
            // es incorrecta le faltan {}, no tiene cuerpo

    e)
        a = function i_like_to_add_strings(left_string, right_string) {
            return right_string + left_string;
        }   // es valido ya que le estas cambiando el nombre de la funcion
        
3) Parting from the previous function definitions, indicate the value of the variable 'result' in each case.
        a)
            let result = this_is_my_first_function();   // te devuelve undefined
        
        b)  
            let result = im_just_a_sum(3, 4) + im_just_a_product(10, 10);   // error
        
        c)
            let result = a("to code", "I like");    // te devuelve "I like to code"
        
        d)
            let result = i_like_to_add_strings("what a long", "function");  // no existe esa funcion, el nombre es "a"
        
        e)
            let result = im_just_a_division(4, 2); // undefined
        
        f)
            let result = im_just_a_sum(3, 3);
            result = result + im_just_a_sum(2, result); // 14 14 14 14 14 
        
        g) let result = im_just_a_product(im_just_a_sum(1, 2), im_just_a_sum(3, 4));    // error
*/

a = function i_like_to_add_strings(left_string, right_string) {
    return right_string + left_string;
} 


console.log(a("to code", "I like"));