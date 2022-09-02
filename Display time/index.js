dateArray = [];

let date = new Date();
result = date.toString();
result = result.split(" ");
if (result[0] === 'Wed') {
    result[0] = "Wednesday";
}
time = result[4].split(":")
if (time[0] < 10) {
    toString (time[0])
}
console.log(time)
console.log(result);


console.log(`Today is ${result[0]}.
Current time is: ${time[0]} PM : ${time[1]} : ${time[2]}`);