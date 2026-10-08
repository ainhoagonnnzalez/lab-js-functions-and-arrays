// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let maxNumber;

    if (num1 > num2){
        maxNumber = num1
    } else if(num1 < num2){
        maxNumber = num2
    }
    else{
        maxNumber = num1
    }
    return maxNumber
}

console.log(maxOfTwoNumbers(3 ,7))
console.log(maxOfTwoNumbers(9 ,0))
console.log(maxOfTwoNumbers(3 ,3))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    if (wordsArray.length === 0) {
        return null;
    }

    let longestWord = wordsArray[0];
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
 let sum = 0;
    for (let i = 0; i < numArray.length; i++){
        sum = sum + numArray[i]

    }
    return sum
}
console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
    if(numArray.length === 0){
        return 0
    }
    let sum = sumNumbers(numArray); 
    let average = sum / numArray.length

    return average
}
   



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, word) {
    if(wordsArray.length === 0){
        return null
    }
    else if(wordsArray.includes(word) === true){
        return true
    }
    else{
        return false
    }
}
