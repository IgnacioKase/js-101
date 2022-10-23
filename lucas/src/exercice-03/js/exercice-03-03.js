function assert_equal(actual, expected) {
  if (actual !== expected) {
    throw actual + " is not " + expected + ".";
  }
}

function frase(lista, word_to_serch) {
  for (current_word of lista) {
    if (current_word === word_to_serch) {
      return true;
    }
  }
  return false;
}

function test() {
  assert_equal(frase(["pablito", "te", "clavo", "en", "4"], "4"), true);
  assert_equal(frase(["maxi", "melano", "treggiga", "@"], "@"), true);
  assert_equal(frase(["puto", "el", "que", "lee"], "yo"), false);
  console.log("===All tests passed===");
}

test();
