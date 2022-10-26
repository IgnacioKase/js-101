function assert_equal(actual, expected) {
    if (actual !== expected) {
        throw (actual + " is not " + expected + ".");
    } else {
    }
}

function remove_odds(lista) {
  let evens = [];

  // lista = [2, 4, 6, 7, 8]
  // i = 0, isEven = true, evens = [2]
  // i = 1, isEven = true, evens = [2, 4]
  // i = 2, isEven = true, evens = [2, 4, 6]
  // i = 3, isEven = false
  // i = 4, isEven = true, evens = [2, 4, 6, 8]
  for (let i = 0; i < lista.length; i++) {
    let isEven = lista[i] % 2 === 0;
    if (isEven) {
      evens.push(lista[i]);
    }
  }

  // Totalmente equivalente usando forEach
  // lista.forEach(element => {
  //   let isEven = element % 2 === 0;
  //   if (isEven) {
  //     evens.push(element);
  //   }
  // });

  return evens;
}

function test() {
  assert_equal(remove_odds([2, 4, 6, 7]), [2, 4, 6]);
  assert_equal(remove_odds([4, 6, 5]), [4, 6]);
  assert_equal(remove_odds([-5, 6, -4]), [6, -4]);
  assert_equal(remove_odds([100, -50, -25]), -25);

  console.log("===All tests passed===");
}

test();
