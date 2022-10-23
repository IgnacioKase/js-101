function assert_equal(actual, expected) {
    if (actual !== expected) {
        throw (actual + " is not " + expected + ".");
    }
}

function numeros(lista){
    let odd = [];
    let pair = [];
    for (let i = 0; i < lista.length; i++){
        if (1 === odd_pair(lista[i])){
            odd[i] = lista[i];
        } else {
            pair[i] = lista[i]
        }
    }
}

function odd_pair(digito){
    let resultado_cero_uno = digito[i] % 2;
    console.log(resultado_cero_uno)
    return resultado_cero_uno;
}

numeros_a_separar = [4, 6, 7, 77];
numeros(numeros_a_separar)


function test() {

    assert_equal(numeros([2,4,6]),12);
    assert_equal(numeros([-2,-4,5]),-1);
    assert_equal(numeros([5,25,3]),33);
    assert_equal(numeros([100,-50,-25]),25);
    assert_equal(numeros([10.5,5,7.9]),23.4);
    assert_equal(numeros([-10.5,5,-7.9]),-13.4);
    
    
    console.log("================");
    console.log("All tests passed");
    console.log("================");
}

test()
