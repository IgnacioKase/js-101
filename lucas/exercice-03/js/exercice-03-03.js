function frase(lista, word_to_serch){
    
    
    var Word = "";
    lista.forEach(function (string) { //recorrer el array
        var miarray = string.split(" "); //separar las palabras de cada array eliminando espacios
        for (var i = 0; i < miarray.length; i++) {
            if (word_to_serch === miarray[i]) {
                    Word = miarray[i];
            }
        }
    });
    console.log(Word)
    return Word;
    

}

//tube alto bardo porque me olvide de ponerle los putos [] a la frase([lista de palabra]) sino creo que lo hubiera echo al principio ...

//let word_to_serch = "js";
//frase(["study", "js", "to", "escape", "latam"])


function test() {

    assert_equal(frase(["pablito", "te", "clavo", "en", "4"]),"4"); //funciona, al provar el test tira en esta linea: Uncaught  is not 4. nose que es
    assert_equal(frase(["maxi", "melano", "treggiga", "@"]),"@");
    assert_equal(frase(["puto", "el", "que", "lee"]),"yo");
    
    
    
    console.log("===All tests passed===");
}

test()