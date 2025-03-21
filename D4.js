/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(2, 2));

//  ESERCIZIO 2
//  Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
//  La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
//  la loro somma moltiplicata per tre.

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(int1, int2) {
  let sum = int1 + int2;
  if (int1 === int2) {
    sum = sum * 3;
    return sum;
  } else {
    return sum;
  }
}
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num) {
  let diff = Math.abs(num - 19);

  if (num > 19) {
    return diff * 3;
  }
  return diff;
}

console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    //n>19 && n<=100
    return true;
  }
  return false;
}

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(word) {
  if (word === "EPICODE") {
    return word;
  }
  return "EPICODE " + word;
}

console.log(epify("Course"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(positiveNum) {
  if (positiveNum % 3 === 0) {
    return "Il numero è un multiplo di 3";
  } else if (positiveNum % 7 === 0) {
    return "Il numero è un multiplo di 7";
  } else {
    return "Il numero non è divisibile nè per 3 nè per 7";
  }
}
console.log(check3and7(8));

//  VARIANTE CON OPERATORE OR
// function check3and7(positiveNum) {
//   if (positiveNum % 3 === 0 || positiveNum % 7 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(check3and7(7));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(reverse) {
  let splitString = reverse.split("");
  let reverseArray = splitString.reverse();
  let reverseJoin = reverseArray.join("");

  return reverseJoin;
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(phrase) {
  let words = phrase.split(" ");
  for (let i = 0; i < words.length; i++) {
    let firstWord = words[i].charAt(0).toUpperCase();
    let restOfWord = words[i].slice(1);
    words[i] = firstWord + restOfWord;
  }

  return words.join(" ");
}
console.log(upperFirst("Ciao a tutti, il cervello sta fumando"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(phrase2) {
  let newPhrase = phrase2.slice(1, phrase2.length - 1);
  return newPhrase;
}
console.log(cutString("Taglia"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  const arrayNum = [];

  for (i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 11);
    arrayNum.push(randomNum);
  }

  return arrayNum;
}

console.log(giveMeRandom(55));
