console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1

let favNumber = 8;
let min = 1;
let max = 100;

let answer = prompt(`Guess a number between ${min} and ${max}!`);

answer = parseInt(answer);

if (isNaN(answer) || answer < 1 || answer > 100) {
  console.log(`you didn't give me a valid number between ${min} and ${max}!`);
} else {
  if (answer == favNumber) {
  console.log("Congratulations!!! You guessed my lucky number!!!");
  } else if (answer > favNumber) {
  console.log("Too high");
  } else {
  console.log("Too low");
  }
}
// Exercise 2

let birthMonth = prompt("What is your birth month?");

switch (birthMonth.toLowerCase()) {
    case "december":
    case "january":
    case "february":
      console.log("You were born in winter");
      break;
    case "march":
    case "april":
    case "may":
      console.log("You were born in Spring");
      break;
    case "june":
    case "july":
    case "august":
      console.log("You were born in Summer");
      break;
    case "september":
    case "october":
    case "november":
      console.log("You were born in Autumn");
      break;
    default:
      console.log("Month not recognized");
}

// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";


switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}


switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}


switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);

// Video Exercise.

let solution = 12;
let x = 4;
let y = 3;

if (x * y == solution) {
  console.log("If/Else: Correct");
} else {
  console.log("If/Else: Incorrect");
}

switch (true) {
  case typeof solution == "number":
    console.log("Correct input type")
  case x * y == solution:
    console.log("Switch: Correct answer");
    break;
  default:
      console.log("Switch: Incorrect answer");
}