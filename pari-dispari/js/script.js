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

function oddEven(firstNum, secondNum) {
  let sum = firstNum + secondNum;
  let isSumEven = false;
  console.log(sum);

  if (sum % 2 === 0) {
    isSumEven = true;
  }

  return isSumEven;
}

// # data

const computerNum = randomNum(1, 5);
console.log("computerNum: ", computerNum);

const userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("userNum: ", userNum);

const userChoice = prompt('Scegli tra "pari" e "dispari"');
console.log(userChoice);

// # validation

const isUserNumValid = userNum < 6 && userNum > 0;

const isUserChoideValid = userChoice === "pari" || userChoice === "dispari";

// # sum and result

let isUserChoiceEven = false;

if (isUserNumValid && isUserChoideValid) {
  let isSumEven = oddEven(userNum, computerNum);
  console.log("isSumEven: ", isSumEven);

  if (userChoice === "pari") {
    isUserChoiceEven = true;
    console.log(isUserChoiceEven);
  }

  if (isSumEven && isUserChoiceEven) {
    alert("Hai vinto!");
  } else {
    alert("Hai perso!");
  }
} else {
  alert("Dati non validi.");
}
