//Завдання 1

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i+1}   -  ${arr[i]}`);
    } 
}
let arr = ["Mango", "Poly", "Ajax"];

logItems(arr);

//Завдання 2

function calculateEngravingPrice(message, pricePerWord) {
    let words = 0; 
    if (!message.includes(' ')) {
        words = 1;
    }
    else {
        words = message.match(/ /g).length + 1;
    }
    return words * pricePerWord;
}

//let message = prompt("Enter a Message You Want to Engrave: ");
let message = "Dearest"; 
let pricePerWord = 4.15; 

console.log(calculateEngravingPrice(message, pricePerWord));

//Завдання 3

function findLongestWord(str) {
    let individualWord = str.split(' ');
    let longest = 0;
    for (let l = 0; l < individualWord.length; l++) {
        if (individualWord[l].length > longest) {
            longest = individualWord[l];
        }
    }
    return longest;
}
let str = "Hello there guys"; 
console.log(findLongestWord(str));

//Завдання 4

function formatString(str) {
    if (str.length < 40) {
        return str; 
    }
    else {
        return str.slice(0, 40) + "...";
    }
}
let phrase = "qwertyuiopasdfghjklthjedcvbhuhnmoiuytredc";
console.log(formatString(phrase));

//Завдання 5

function checkForSpam(message) {
    if (message.includes("Spam") || message.includes("spam")) {
        return true; 
    }
    else {
        return false; 
    }
}

let checkMS = "Here is a Sale (spam)"; 
console.log(checkForSpam(checkMS));

//Завдання 6
let input;
const numbers = [];
let total = 0;

input = prompt("Enter a Number: ");
if (input !== null) {
  numbers.push(parseInt(input));
}

while (input !== null) {
  input = prompt("Enter a Number: ");
  if (input !== null && !isNaN(parseInt(input))) {
    numbers.push(parseInt(input));
  }
}

for (let n = 0; n < numbers.length; n++) {
  total += numbers[n];
}

console.log(`Загальна сума чисел дорівнює ${total}`);
