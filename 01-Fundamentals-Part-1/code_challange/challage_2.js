// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

let markOneWeight = 78
let markOneHeight = 1.69

let johnOneWeight = 92
let johnOneHeight = 1.95

let markBMI = markOneWeight / markOneHeight ** 2
console.log("Mark's BMI : ", markBMI);

let johnBMI = johnOneWeight / (johnOneHeight * johnOneHeight)
console.log("John's BMI : ", johnBMI);

let greaterBMI
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is higher than John's`);
// } else {
//     console.log("John's BMI is higher than Mark's!");
//     }

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log("John's BMI is higher than Mark's!");
}

console.log("*******************************");


markOneWeight = 95
markOneHeight = 1.88
markBMI = markOneWeight / markOneHeight ** 2
console.log(markBMI);

johnOneWeight = 85
johnOneHeight = 1.76
johnBMI = johnOneWeight / (johnOneHeight * johnOneHeight)
console.log(johnBMI);

greaterBMI
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI is (${johnBMI}) higher than Mark's BMI (${markBMI})!`);
    }