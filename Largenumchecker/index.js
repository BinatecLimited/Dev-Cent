// let x = [];
// let y = []; 
// let z = [];
// let a = [];
// let b = [];

// let givenNum = [2, 4, 5, 2, 4 ,6, 4, 7, 5, 8, 7]

// // let i = givenNum.length - 1;

// let j = 0;
// for (i = 0; i < givenNum.length; i++) {
//     if(givenNum[0] == givenNum[i]) {
//         console.log(x.push(Number(`${givenNum[0]}`)))
//     } else if (givenNum[1] == givenNum[i]) {
//         console.log(y.push(Number(`${givenNum[1]}`)))
//     } else if (givenNum[2] == givenNum[i]) {
//         console.log(z.push(Number(`${givenNum[2]}`)))
//     } else if (givenNum[5] == givenNum[i]) {
//         console.log(a.push(Number(`${givenNum[5]}`)))
//     } else if (givenNum[7] == givenNum[i]) {
//         console.log(b.push(Number(`${givenNum[7]}`)))
//     }
// }
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);

// if (x.length > y.length && x.length > z.length && x.length > a.length && x.length > b.length) {
//     console.log("Number 2 appears the most")
// } else if (y.length > x.length && y.length > z.length && y.length > a.length && y.length > b.length) {
//     console.log("Number 4 appears the most")
// } else if (z.length > y.length, x.length, a.length, b.length) {
//     console.log("Number 5 appears the most")
// } else {
//     console.log("They all appear once")
// } 

// // let sortedArray = (givenNum.sort())

// // for(i = 0; i < sortedArray.length; i++) {
// //     sortedArray.includes(i);
// //     if (true) {
// //         value = (sortedArray[i]);
// //         console.log(value)
// //     }
// // }

// function solution(param1, param2) {
//     let solm = param1 + param2;
//     return solm
// }

// solution(1, 3);

// function sum(A, B) {
//     let C = A + B;
//     return C;
// }

// console.log(sum(1, 3))

function solution(year) {
    let century = year + 100;
    return century[0][1]
}

console.log(solution(2022));