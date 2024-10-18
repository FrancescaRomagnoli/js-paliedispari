// $ Palidroma
// $ Chiedere all’utente di inserire una parola
// $ Creare una funzione per capire se la parola inserita è palindroma

// # functions

function wordReverse(word) {
  let newWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  return newWord;
}

// # user data

const userWord = prompt("Inserisci una parola");
const isUserWordValid = userWord.length > 0;
console.log(userWord, isUserWordValid);

let reversedWord = wordReverse("hola");
console.log(reversedWord);
