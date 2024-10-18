// $ Palidroma
// $ Chiedere all’utente di inserire una parola
// $ Creare una funzione per capire se la parola inserita è palindroma

// # functions

function stringReverse(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

// # user data

const userWord = prompt("Inserisci una parola");
const isUserWordValid = userWord.length > 2;
console.log(userWord, isUserWordValid);

if (isUserWordValid) {
  reversedWord = stringReverse(userWord);
  console.log(reversedWord);
  // # output
  alert(
    userWord === reversedWord
      ? "La parola inserita è palindroma"
      : "La parola inserita non è palindroma"
  );
} else {
  alert("La parola non è valida.");
}

// if (userWord === reversedWord) {
//   console.log("La parola inserita è palindroma");
// } else {
//   console.log("La parola inserita non è palindroma");
// }
