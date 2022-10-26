function assert_equal(actual: any, expected: any) {
  if (actual !== expected) {
    throw actual + " is not " + expected + ".";
  } else {
  }
}

function assert_throw(method: any, ...params: any) {
  try {
    method(...params);
  } catch (error) {
    return;
  }
  throw "Error not raised";
}

function assertEqualArrays(a: any[], b: any[]) {
  if (a.length !== b.length) {
    throw new Error("Arrays are not equal");
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      throw new Error("Arrays are not equal");
    }
  }
}

export { assert_equal, assert_throw, assertEqualArrays};
