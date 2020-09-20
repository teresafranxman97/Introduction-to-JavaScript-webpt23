/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 22;
if (votingAge > 18) {
  console.log("True!");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let weather = "summer";
weather = "Fall";
if ((weather = "Fall")) {
  console.log("I love Fall!");
} else if ((weather = "Summer")) {
  console.log("Its too hot!");
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const number = parseInt("1999");
console.log(number);

//Task d: Write a function to multiply a*b

function multiply(a, b) {
  return a * b;
}
console.log(multiply(22, 10));

/************************************************************** Task 2 ******;********************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function ageInDogYrs(myAge, dogYrs) {
  return myAge * dogYrs;
}
console.log(ageInDogYrs(22, 7));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

function dogFeeder(weight, age) {
  if (age >= 0.1666666666666667 && age <= 0.3333) {
    food = age * 0.1;
  } else if (age >= 0.3333 && age <= 0.58333) {
    food = age * 0.05;
  } else if (age >= 0.58333 && age < 1) {
    food = age * 0.04;
  }
  if (age >= 1 && weight <= 5) {
    food = weight * 0.05;
  } else if (age >= 1 && weight >= 6 && weight <= 10) {
    food = weight * 0.04;
  } else if (age >= 1 && weight >= 11 && weight <= 15) {
    food = weight * 0.03;
  } else if (age >= 1 && weight > 15) {
    food = weight * 0.02;
  }
  return food;
}
console.log(dogFeeder(15, 1));

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

let myChoice = ("Rock", "Paper", "Scissors");
let computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "Rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}
choice1 = myChoice;
choice2 = computerChoice;

function rpsGame(choice1, choice2) {
  if (choice1 === choice2) {
    return "ITS A TIE!";
  }
  if (choice1 === "Rock") {
    if (choice2 === "Scissors") {
      return "Rock wins!";
    } else {
      return "Paper Wins!";
    }
  }
  if (choice1 === "Paper") {
    if (choice2 === "Rock") {
      return "Paper wins!";
    } else {
      return "Scissors wins!";
    }
  }
  if (choice1 === "Scissors") {
    if (choice2 === "Paper") {
      return "Scissors wins!";
    } else {
      return "Rock wins!";
    }
  }
}
console.log(rpsGame(choice1, choice2));
rpsGame("Paper", choice2);
rpsGame("Rock", choice2);

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function convert(kilometers, miles) {
  miles = 0.62;
  return kilometers * miles;
}
console.log(convert(5));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function convertTo(feet, cm) {
  cm = 30.48;
  return feet / cm;
}
console.log(convertTo(3));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(bottles) {
  for (let i = number; i > 0; i--) {
    console.log(
      i,
      "bottles of soda on the wall",
      i,
      "bottles of soda, take one down pass it around",
      i - 1,
      "bottles of soda on the wall"
    );
  }
}
console.log(annoyingSong(4));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function letterGrade(percentage) {
  if (percentage <= 100 && percentage >= 90) {
    console.log("You got an A!");
  } else if (percentage <= 89 && percentage >= 80) {
    console.log("You got a B!");
  } else if (percentage <= 79 && percentage > 70) {
    console.log("You got a C!");
  } else if (percentage <= 69 && percentage >= 60) {
    console.log("You got a D!");
  } else if (percentage <= 60) {
    console.log("You got an F!");
  }
}
letterGrade(77);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let myChoice = prompt("Rock", "Paper", "Scissors");
let computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "Rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}
choice1 = myChoice;
choice2 = computerChoice;

function rpsGame(choice1, choice2) {
  if (choice1 === choice2) {
    return "ITS A TIE!";
  }
  if (choice1 === "Rock") {
    if (choice2 === "Scissors") {
      return "Rock wins!";
    } else {
      return "Paper Wins!";
    }
  }
  if (choice1 === "Paper") {
    if (choice2 === "Rock") {
      return "Paper wins!";
    } else {
      return "Scissors wins!";
    }
  }
  if (choice1 === "Scissors") {
    if (choice2 === "Paper") {
      return "Scissors wins!";
    } else {
      return "Rock wins!";
    }
  }
}
console.log(rpsGame(choice1, choice2));
