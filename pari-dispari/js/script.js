// $ Pari e Dispari
// $ L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// $ Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// $ Sommiamo i due numeri
// $ Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// $ Dichiariamo chi ha vinto.

// # functions

function randomNum(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
}

let aNum = randomNum(1, 5);
console.log(aNum);
