function assert_equal(actual, expected) {
  if (actual !== expected) {
    throw actual + " is not " + expected + ".";
  }
}

function suma(lista) {
  let resultado = 0;
  for (let i = 0; i < lista.length; i++) {
    resultado = lista[i] + resultado;
  }
  return resultado;
}

function test() {
  assert_equal(suma([2, 4, 6]), 12);
  assert_equal(suma([-2, -4, 5]), -1);
  assert_equal(suma([5, 25, 3]), 33);
  assert_equal(suma([100, -50, -25]), 25);
  assert_equal(suma([10.5, 5, 7.9]), 23.4);
  assert_equal(suma([-10.5, 5, -7.9]), -13.4);

  console.log("================");
  console.log("All tests passed");
  console.log("================");
}

test();
