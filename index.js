const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased=()=>{
return tutorials.map((tutorial)=>{
//We need to split the string where the words are separated.
const wordsInTutorial = tutorial.split(' ');   // When a string is split, an array results.
const firstLetterCapital = wordsInTutorial.map((word)=>{
return word.charAt(0).toUpperCase() + word.substring(1)// Capitalises the first letter in the passed word and adds to the rest of the word body
})

return firstLetterCapital.join(' '); //The contituent parts of the array back to a string.
})
}

console.log(titleCased());