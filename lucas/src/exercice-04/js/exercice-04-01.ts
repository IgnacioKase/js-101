let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let evens = numbers.filter(isEven);

function isEven(lista: number): boolean {
  for (let i = 0; i < lista.length; i++){
    if(lista[i] % 2 === 0){
      x = lista[i] + x;
      return true, x;
    }
  }
  return false;
}
console.log(evens)

// error Refused to execute script from 'file:///C:/Users/lucc1/Documents/js-101/lucas/src/exercice-04/js/tests.ts' because its MIME type ('video/vnd.dlna.mpeg-tts') is not executable.
// salen 3 mas con el nombre de cada exercice