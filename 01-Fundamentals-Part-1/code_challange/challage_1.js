////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 || mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let markOneWeight = 78
let markOneHeight = 1.69

let johnOneWeight = 92
let johnOneHeight = 1.95

let markBMI = markOneWeight / markOneHeight ** 2
//console.log("Mark's BMI : ", markBMI);

let johnBMI = johnOneWeight / (johnOneHeight * johnOneHeight)
//console.log("John's BMI : ", johnBMI);

let markHigherBMI = markBMI > johnBMI
console.log("Mark's BMI greater than John's :",markHigherBMI);

markOneWeight = 95
markOneHeight = 1.88
markBMI = markOneWeight / markOneHeight ** 2

johnOneWeight = 85
johnOneHeight = 1.76
johnBMI = johnOneWeight / (johnOneHeight * johnOneHeight)

markHigherBMI = markBMI > johnBMI
console.log("Mark's BMI greater than John's :", markHigherBMI);