/*function numeros(lista){
    
    if(lista.length === 0){
        throw "Introdujo una lista vacia"
    }
    let odd = [];
    console.log(odd);
    let pair = [];
    for (var i = 0; i < lista.length; i++){
        if (1 === lista[i] % 2){
            odd[i] = lista[i];
            console.log(odd);
        } else {
            pair[i] = lista[i]
        }
    }
    console.log("La lista impar es " + odd);
    console.log("La lista impar es " + pair);
    return odd;
}

// en odd me sale vaciox2 en la consola, se ve como ,, y los numeros impares, nose porque y con el fail 2 no lo pude arreglar por otros problemas.
// dado eso tampoco puedo hacer los test porque me tira que ,,7 no es 7 :c
//numeros_a_separar = [4, 6, 7, 77];
//numeros(numeros_a_separar)


function test() {

    assert_equal(numeros([2,4,6,7]),7);
    assert_equal(numeros([4,6,5]),5);
    assert_equal(numeros([-5,6,-4]),-5);
    assert_equal(numeros([100,-50,-25]),-25);
    
    
    console.log("===All tests passed===");
}

test()
*/