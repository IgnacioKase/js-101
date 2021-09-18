/*
1) Read the following variable declarations and mark if they are correct and what type of variable they are. If the definition
is not correct, clarify why it isn't.

    a) let my_variable = 1542.2; // numerico correcto
    b) var you_shoudnt_use_me = "What do you think?"; // string correcto
    c) awesome_variable = true; // incorrecto falta let seria boolean
    d) let im_just_a_number = 12 // numerico correcto
    e) let $_i_like_money = undefined; // undefined correcto forro 
    f) let 123_my_variable = null; // incorrecto 123 null
    g) let i_dont_want_a_value = null // null correcto
    h) let i'm_a_variable = "just a variable"; // incorrecto por la comilla string

2) Read the following function definitions, mark if they are correct, and clarify if they have input parameters  and if they
have a return value. // nombre y cuerpo obligatorio

    a)
        function this_is_my_first_function() {
            console.log("Hello world");
        } // correcto no tiene in ni out al no tener return tiene valor undefined la funcion

    b)
        function im_just_a_sum(a, b) {
            return a + b;
        } // correcto tipo:unknow tiene in y out

    c)
        function im_just_a_division(a, b) {
            a / b;
        } // correcto tiene in no out tira undefined

    d)
        function im_just_a_product(a, b)
            return a * b;
          // incorrecto no tiene cuerpo
    e)
        a = function i_like_to_add_strings(left_string, right_string) {
            return right_string + left_string;
        } // correcto tiene in y out string
        
3) Parting from the previous function definitions, indicate the value of the variable 'result' in each case.
        a)
            let result = this_is_my_first_function(); //undefined
        
        b)  
            let result = im_just_a_sum(3, 4) + im_just_a_product(10, 10); // error
        
        c)
            let result = a("to code", "I like"); // correcto fijate en la funcion
        
        d)
            let result = i_like_to_add_strings("what a long", "function"); // incorrecto no es una funcion a lo es
        
        e)
            let result = im_just_a_division(4, 2); // undefined
        
        f)
            let result = im_just_a_sum(3, 3);
            result = result + im_just_a_sum(2, result); // correcto
        
        g) let result = im_just_a_product(im_just_a_sum(1, 2), im_just_a_sum(3, 4)); // error
*/
