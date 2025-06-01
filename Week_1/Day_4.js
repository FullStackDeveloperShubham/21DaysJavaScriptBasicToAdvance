Day 4 – Control Flow

if, else, else if, switch

Ternary operator

Control Flow
Control flow structures allow your code to make decisions and execute different blocks of code based on conditions.

✅ if, else if, else

let age = 20;

if (age < 13) {
  console.log("You are a child");
} else if (age < 18) {
  console.log("You are a teenager");
} else {
  console.log("You are an adult");
}
if checks the first condition.

else if adds more conditions.

else runs if none of the above conditions are true.

switch Statement
Use switch for checking one variable against multiple values:

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Just another day");
}

❔ Ternary Operator
A shortcut for if...else statements.

let age = 18;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);
Syntax:

condition ? expressionIfTrue : expressionIfFalse;