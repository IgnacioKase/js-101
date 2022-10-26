function assert_equal(actual, expected) {
  if (actual !== expected) {
    throw actual + " is not " + expected + ".";
  }
}

function find(lista, word_to_serch) {
  for (current_word of lista) {
    if (current_word === word_to_serch) {
      return true;
    }
  }
  return false;
}

function find_forEach(lista, word_to_serch) {

  lista.forEach(function(current_word) {
    if (current_word === word_to_serch) {
      return true;
    }
  });
  
  return false;
}

function test() {
  assert_equal(find(["pablito", "te", "clavo", "en", "4"], "4"), true);
  assert_equal(find(["maxi", "melano", "treggiga", "@"], "@"), true);
  assert_equal(find(["puto", "el", "que", "lee"], "yo"), false);
  console.log("===All tests passed===");
}

test();
