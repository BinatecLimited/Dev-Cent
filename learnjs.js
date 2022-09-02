// alert("Welcome to Devcent.");
// let Name = prompt("What is your name: ");
// console.log(Name);

//Identifiers
// Variable names can be considered as identifiers.
//Object in JavaScript is an implementation of Struct from C programming.
//Function names and Array names are also identifiers

// TWO TYPES OF COMMENTS
//SINGLE LINE COMMENT "//"
// MULTIPLE LINE COMMENT "/* */"
// In JavaScript it is essential to terminate the end of a statement with semi-colon

// Write a program that takes the day of the week (0-6) from a user as an input and returns the day of the week to the user in word.
// log it on the console and show it on the browser using the alert function.

//initializing pi

// const pi = 3.142; // Values assigned with const remain constant and cannot be changed later
// let score = 90; 

// console.log(pi);

// console.log(score);

// score = 55;

// console.log(score);

// let school = 'Lautech'

// school = 578



// let radius = 100;

// console.log((pi * radius ** 2) + 500);

// let result = 31 % 15;
// console.log(result);

// let res = 56 * 45 - 10 / 18 + (21 * 3) / 14;

// console.log(res);

// console.log('r'+ 1);

// // SEarch Math MDN on google
// //Math MDN_ Mozilla Devloper Network
// console.log(Math.pow(2, 4));
// console.log(Math.floor(4.8));
// console.log(Math.ceil(4.3));
// console.log(Math.round(4.5));
// //code to generate random numbers from 1 to 10
// let number = Math.random()

// console.log(number);

// number = number * 10;

// console.log(Math.ceil(number));

// // code to generate a random number between 10 to 20

// let num = Math.random()

// num = num * 10 + 10;

// console.log(Math.ceil(num));
// JAVASCRIPT DATATYPES
//we have two main types
//1. Primitive type e.g numbers, strings, booleans, symbols. 
    //with special types category e.g null.
//2. Object Type

// const week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// // const weekDay = prompt("Day of the week", 0);

// const ans = week.find(function(week, i) {
//     console.log(i);
// })


// Write a program to log even and odd numbers between one and fifty exclusively. Your output must be in the format "number, eve/odd"

// for (let i = 1; i < 50; i++) {
//     if (i % 2 === 0) 
//         console.log(`${i} is even.`);
//     if (i % 2 !== 0) 
//         console.log(`${i} is odd.`);
// }

// Write a program that takes a number input from the user and logs 

// const input = prompt("Enter your numer here");

// let i = input;

// for(i; i > 0; i--) {
//     console.log(`The number is ${i}.`);
// }

// ASSIGNMENT. CREATE A GUESSING GAME.n  

// let numbe = Math.random();

// let limit = 20, max = 40;

// let resul = numbe * limit + (max / 2); //limit

// console.log(Math.round(resul));


// ways to convert input to a number;

//1. Using the Number object
//2. Using the parseInt object

// we can use confirm to receive boolean  input from user

// let state = confirm("Do you want to enter");
// console.log(state);

// if (state) {
//     alert("you're welcome");
//     let input = prompt("Enter a number");

//     input = parseInt(Int);

//     console.log(input + 25);
// }

// COMPARISON OPERATORS IN JAVASCRIPT
// <
// >
// <=
// >=
// !=
// ==

// STRICT EQUALITY OPERATOR
// !==
// ===

// difference between normal equal to and strict equal to

// console.log(5 == "5"); //true
// // while
// console.log(5 === "5"); //fasle

// console.log(5 < 9);
// console.log(1 < 9);
// console.log(5 > 9);
// console.log("femi" < "oluwafemi");
// console.log("Femi" == "femi"); //false

// //CONDITIONAL STATEMENTS

// // Tip: when doing comparisons ensure to use triple equal to

// let password = "femi12345";

// if (password === "femi12345") {
//     console.log("You are welcome");
// } else {
//     console.log("you have input an incorrect password");
// }

// two types of if statements

// Nested if and cascaded if 


// CASCADED IF
// let age = 10;

// if (age < 9) {
//     console.log("You're are a baby");
// } else if (age > 9) {
//     console.log("you're a small child")
// } else if (age > 12) {
//     console.log("you're a teenager")
// } else if (age > 30) {
//     console.log("you're a veteran")
// } else {
//     console.log("your age group is not available");
// }

// LOGICAL OPERATORS
// logical And: &&
// Logical Or: ||
// Logical Not: !

// console.log((2 > 8 && !(7 < 1) && 8 > 4) || "Yes" == "yes");

// Program to calculate grade of a Student 

// When a student scores between 0 to 39 F9

// ASSIGNMENT

// 1. Finish up the above code ()
// 2. Write a program that takes a number input and check if the number and matches the generated number. If it matches respond with a message that you guessed right otherwise you guessed wron    g.
// 3. Write a program to check if an input number is even or odd and at the same time check if a generated random number is even or odd.
// 4. Write a program to generate random number between 100 and 200. Check if the generated number is between 140 to 180. 


// QUESTION 1
// let mark = prompt("Input your score.");

// mark = Number(mark);
// if (mark < 0) {
//     console.log("YOU'RE A FAILURE, YOU CAN NEVER MAKE IT");
// }else if (mark >= 0 && mark <= 39) {
//     console.log("YOUR GRADE IS F");
// } else if (mark >= 40 && mark <= 49) {
//     console.log("YOUR GRADE IS D");
// } else if (mark >= 50 && mark <= 59) {
//     console.log("YOUR GRADE IS C");
// } else if (mark >= 60 && mark <= 69) {
//     console.log("YOUR GRADE IS B");
// } else if (mark >= 70 && mark <= 100) {
//     console.log("YOUR GRADE IS A");
// } else {
//     console.log("you're a THEIF");
// }

// QUESTION 2

// let input = prompt("Guess a Number");

// input = Number(input);

// let gen_num = Math.random();

// gen_num = Number(Math.ceil(gen_num));
// console.log(gen_num);

// if (input === gen_num) {
//     console.log("Congrats, you guessed Right.")
// } else {
//     console.log("Sorry, You guessed wrong.")
// }

// QUESTION 3

// console.log("A program to check if an input number is even or odd and at the same time check if a generated random number is even or odd.")

// let num = prompt("Enter a number");

// num = Number(num);

// console.log(`The number you input is ${num}`)

// let sec_num = Math.random();

// sec_num = Number(Math.ceil(sec_num));

// if (num % 2 == 0 && sec_num % 2 == 0) {
//     console.log(`The number you input is an even number and the random number (${sec_num}) is also an even number`);
// } else if (num % 2 == 0 && sec_num % 2 == 1) {
//     console.log(`The number you input is an even number and the random number (${sec_num}) is an odd number`);
// } else if (num % 2 == 1 && sec_num % 2 == 0) {
//     console.log(`The number you input is an odd number and the random number (${sec_num}) is an even number`);
// } else if (num % 2 == 1 && sec_num % 2 == 1) {
//     console.log(`Both the number you input and the random number (${sec_num}) are odd numbers`);
// }

// 4. Write a program to generate random number between 100 and 200. Check if the generated number is between 140 to 180. 

// let min = 100;
// let max = 200;

// let random_num = Math.random(); 
// random_num = Number(random_num * min + max / 2);
// random_num = Math.ceil(random_num);

// console.log(random_num);

// if (random_num >= 140 && random_num <= 180) {
//     console.log(`The Random number ${random_num} is between 140 to 180.`)
// }

// TEMPLATE LITERALS

// let score = 58;
// let age = 30;
// let city = 'Abeokuta'

// console.log(`My score is ${score} and my age is ${age}. I live in ${city}`);  //It helps interpret whatever is stored in a variable

// let text = `My score is ${score} and my age is ${age}. I live ${city}`; // so we can store template literals in a variable

// console.log(text);

// // we can get the length of a string using the length command

// let result = text.length;

// console.log(result);

// // CODE WORKS .....

// //Every string in JavaScript has methods

// result = city.split("");
// console.log(result)

// result = text.split(" ");
// console.log(result)

// let date = Date.now();
// date = new Date(date);
// console.log(date);
// result = date.toString();
// result = result.split(" ");
// console.log(result);
// console.log(result[4]);

// let result2 = date.toString();
// result2 = result2.substring(11, 15);
// console.log(result2.indexOf(0));

// Syntax of a simple template literal
// TEMPLATE LITERALS ALLOWS FOR SIMPLE MATH CALCULATIONS

// ARRAYS
// An array is a list of variables with various data types

// Array is a collection of elements. Arrays are objects.

// we can initialize an array in 2 different ways

// const a = [];
// const a = Array();

// Array is index based 

const schools = ["FUNAAB", "LAUTECH", "UNILAG", "FUTA"];
// const otherSchools = ["EKSO", "OOU", "OAU"];

// let message = `
//     The following are the accepted schools; \n
//     ${schools.join("-")}
// `
// console.log(message);

// console.log(schools.filter)

// push object is used to add an item to the end of an array

// schools.push("U.I");
// console.log(schools);

// to remove item from the back of an array we use pop object

// schools.pop();
// console.log(schools);

// To add an item to the begening of an array we use unshift 

schools.unshift("UNILORIN");
schools.unshift("LASU")
console.log(schools);
schools.shift()
console.log(schools);

// console.log(schools.concat(otherSchools));

// the spread operator   (...)
// const newSchool = ["LASU", "LASPOTECH", ...schools, "U.I"];

// console.log(schools);
// console.log(newSchool);

// schools.pop()
// console.log(schools);
// console.log(newSchool);

// to avoid duplicate results like we have above when the code is run we ensure to use the spread operator with the spread operator we can add more items into the assigned variable without affecting the original cloned variable 

// LOOPS

// we have 3 types of loops
// While loop 
// for loop
// for ..of loop

// BOOLEAN VARIABLES. BOOLEAN has two values which is true and false.

// Values that can be treated as true in JavaScript we call them Truthy:
// 1
// "femi"
// All values except below listed values

// Falsey Values are values that represent false
//  false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// While loop
// let A = 'boy';
// let count = A.length - 1;

// while (count >= 0) {
//     console.log(A[count]);
//     count++; //post increment operator  ++count: pre-increment operator
// };
// count += 1; //Assignment operator

// DO ..WHILE LOOP

// do {

// } while (true) {

// }

// for loop
// for (control variable; condition; increament or decerement)
// for (let i = 0; i <= 10;  i++) {
//     console.log(i)
// }

//break
//continue

// const numbers = [45, 24, 60, 18, 100]
// const names = ['kola', 'Tunji', 'DAVID', 'Benson', 'Wale']

// for (i=0; i < numbers.length; i++) {
//     if (numbers[i] == 18) {
//         console.log(`Numbers ${numbers[i]} exist.`);
//         break;
//     } else {
//         if (i == numbers.length) console.log("Number doesn't exist"); 
//     }
// }

// for (i=0; i < names.length; i++) {
//     if ('DAVID' === names[i]) {
//         continue;
//     }

//     console.log(names[i])
// }

// NESTED FOR LOOPS

// const data = [['Kunle', 'Tobi', 'Femi'], [12, 16, 30], ['LAUTECH', 'U.I', 'FUNAAB'], 'Abeokuta']

// for (i = 0; i < data.length; i++) {
//     console.log(data[i])

//     for (j = 0; j < 2; j++) {
//         console.log(j);
//     }
// }

//  FOR... OF
// const score = [30, 70, 90]

// for (element of score) {
//     if (element == 60) {
//         console.log(element);
//     }
// }

// FUNCTIONS

// function declaration
// function getData() {
//     // do something
//     const name = prompt("Input your name", "")
//     const age = prompt("Input your age", "")

//     // console.log(name);
//     // console.log(age)
//     return name;
// }

// function call


// for(let i = 0; i < 2; i++) {
//     getData()
// }
// let result = getData();
// console.log(result);

// function getData() {
//     // do something
//     const name = prompt("Input your name", "")
//     const age = prompt("Input your age", "")

//     if (age < 18) {
//         return `${name}, you're not eligible.`
//     }
//     return `${name}, you're eligible.`;
// }

// let result = getData();
// console.log(result);

// function getData() {
//     // do something
//     const name = prompt("Input your name", "")
//     const age = Number(prompt("Input your age", ""))
//     return [name, age];
// }

// function isEligible(age) {
//     if (age <= 17) {
//         return true
//     } else {
//         return false
//     }
// }

// let data = getData();
// console.log(data);

// if (isEligible(data[1])) {
//     console.log(`${data[0]}, you're not eligible`)
// } else {
//     console.log(`${data[0]}, you're eligible`)
// }

// function sum(A, B) {
//     let C = A + B;
//     return C;
// }

// let eq1 = sum(2, 4)
// let eq2 = sum(2,-1)

// console.log(`The value for eq1 is ${eq1} and value for eq2 is ${eq2}, their sum is ${eq1 + eq2}`)


// Function Area of a circle
// function circle(radius) {
//     const pi = 3.142;

//     area = pi * Math.pow(Number(radius), 2);

//     if (radius === undefined || radius === String) {
//         return 0;
//     }
//     // if (area === NaN) {
//     //     return 0;
//     // }
//     return area;
// }

// let result = circle("boy");
// console.log(result);

// // We can have a fundstion inside a function

// in prograaming we have something called scope
// 2. Variable scope
// 1. Global Scope

// function rect() {   //Normal way  //ALLOWS HOISTING

// }

// const myRect = function() {

// }
  
// const myRect = function myRect() {

// }

// // Arrow Functions in JavaScript
// const rect = (length, breadth) => {
//     console.log(`rect values are ${length}, and ${breadth}.`)
// }

// rect(10, 20);
// Hoisting is a process of moving function definition or function declaration to the top of the program at the wrong time. Hoisting allows you to call your function friom the top of the code.

// const rect = (char) => {
//     const string = "Lorem Ipsum, dolor sit amet coswcuer"
//     return string.split(char, 2);
// }

// console.log(task("d"));

// function isPrime(number) {
//     for(i=2; i<=number; i++) {
//         if (number % i == 0 && i < number) {
//             return false;
//         } else {
//             return true;
//         }
//     }   
// }

// console.log(isPrime(3));

// OBJECT

// const person = {
//     // key : //value  - pairs
//     name: "David",
//     email: "davidbanjo879@gmail.com",
//     city: "Abeokuta",
//     state: "Ogun State",
//     country: "Nigeria",

// }
// //  TO access the property of an object we make use of dot notation and square bracket.
// let name = person.name
// console.log(name);
// let state = person.state
// console.log(state);
// let email = person["email"]
// console.log(email);

// person.age = 20;
// person.name = "Bright"

// // To delete property of an object
// delete person.age;

// console.log(person);



// CONSTRUCTOR FUNCTION
// Creating an object using a Constructor Function.

//  When a function is inside an object its no longer called a function its called a method
const person = {
    // key : //value  - pairs
    name: "David",
    email: "davidbanjo879@gmail.com",
    city: "Abeokuta",
    state: "Ogun State",
    country: "Nigeria",
    logData: function() {
        console.log(this.name, this.email)
    }   
}
person.logData()

function Car(brand, model) {    // OOP concept
    this.model = model;
    this.brand = brand;
    this.logData = function() {
        console.log(this.brand);
    }
}

let myFirstCar = new Car("Corrola", "Toyota");
let mySecondCar = new Car("Corrola", "Toyota");

console.log(myFirstCar);
myFirstCar.logData()
console.log(mySecondCar);

let Vehicle = [
    myFirstCar,
    mySecondCar
];

console.log(Vehicle);

//  We can filter an array using array.filter 