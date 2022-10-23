function suma(a: number, b: number): number {
    return a + b;
}

function testSuma(): void {
    suma(1, 2);
    console.log("======All test passed======")
}

export {testSuma, suma};
