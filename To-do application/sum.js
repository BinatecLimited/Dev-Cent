// function solution(param1, param2) {
//     add = param1 + param2;
//     return(add) ;
// }

// solution(1, 3);

// function solution(year) {
//     let century = Math.ceil((year / 100));
//     return century
// }

// console.log(solution(1950))

// function solution(inputString) {

//     // Converted the String to an array to be able to iterate through the values easily.

//     let stringArray = inputString.split("");
//     console.log(stringArray);
//     let reverseStringArray = [];

//     //  code to iterate through the array and attempt string reversal.

//     for (i = stringArray.length - 1; i >= 0; i--) {
//         reverseStringArray.push(stringArray[i])
//     }
//     console.log(reverseStringArray);
//     // let newInputString = reverseStringArray.toString();
//     let newInputString = reverseStringArray.join('')
//     console.log(`Answer is ${newInputString}`)
//     if (inputString === newInputString) {
//         return `${inputString} is a Palindrome`
//     }
//     return `${inputString} is not a palindrome`
// }
// console.log(solution("racecar"));


// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.


const inputArray = [3, 6, -2, -5, 7, 3]
function solution(inputArray) {
    let sum = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        sum = Math.max(sum, inputArray[i] * inputArray[i+1]);
        console.log("This is" + sum)
    }
    return sum;
}

console.log(solution(inputArray))