"use strict";
// let list = document.querySelector(".list");

// list.style.display = "flex";
// list.style.flexDirection = "column";

// let btn = document.querySelector(".btn");

// let ul = document.addEventListener("ul");

// btn.addEventListener("click", () => {
//   console.log("Click");
//   list.style.backgroundColor = "blue";
//   ul.remove();
// });

// remove an element

// let elements = document.querySelectorAll("li");

// let ul = document.querySelector("ul");

// elements.forEach((element) => {
//   //   console.log("click");
//   element.addEventListener("click", (e) => {
//     e.target.style.textDecoration = "line-through";
//     e.target.remove();
//   });
// });
// btn.addEventListener("click", () => {
//   //   console.log("chimp");
//   let li = document.createElement("li");
//   li.textContent = "Full Samport";
//   ul.append(li);
// });

// Regex - pattern matching

// let form = document.querySelector(".form");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let passwordPattern = "^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}$";
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let passwordValue = password.value;
//   console.log(passwordValue);
//   let result = passwordValue.match(passwordPattern);
//   if (result) {
//     console.log("password is correct");
//   } else {
//     console.log("your password is weak ");
//   }
// });

// let letters = ["a", "b", "c", "d"];

// console.log(letters.reverse());

// at method

// const nums = [1, 2, 3, 4, 5, 6];

// console.log(nums.at(-1));

// Higher Order Functions

// Map Method

// creates a new array from original by applying
// transformation function

// let sal = [2000, 3000, 4000, 5000];

// let newSal = sal.map((s) => {
//   let salary = s / 2;
//   return s + salary;
// });

// console.log(newSal);

// filter
// it is used filter out the array

// let num = [1, 2, 1, 3, 4, 2];

// let filterArray = num.filter((n) => {
//   if (n == 1 || n == 2) {
//     return n;
//   }
// });

// console.log(filterArray)

// reduce
// run reducer function for each array element
// Array.reduce(function(total,currentValue),initialValue)
// It returns single value

// sum of all elements using reduce methods

// let num = [2, 4, 87, 3, 4];

// let sum = num.reduce((total, currentValue) => {
//   return total + currentValue;
// }, 0);

// console.log(sum)

// find method
// It returns the "first" element we are looking for...

// let students = [
//   { id: 1, name: "jack" },
//   { id: 2, name: "kie" },
// ];

// let st = students.find((student) => {
//   return student.id == 2;
// });

// console.log(st)

let random = Math.floor(Math.random() * 20) + 1;
console.log(random);
const quiz = () => {
  const guess = Number(document.querySelector(".guess").value);
  let score = document.querySelector(".score").innerHTML;
  let high = document.querySelector(".high").innerHTML;

  if (!guess) {
    if (score > 0) {
      document.querySelector(".response").textContent = "no guess!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".response").textContent = "You lost the game";
    }
  }

  // if the guess is correct
  else if (guess === random) {
    document.querySelector(".mystery").textContent = random;
    document.querySelector(".response").textContent = "Correct answer";
    document.body.style.backgroundColor = "green";
    if (score > high) {
      document.querySelector(".high").innerHTML = score;
    } else {
      document.querySelector(".high").innerHTML = high;
    }
  }

  // if guess is not correct
  else if (guess !== random) {
    if (score > 0) {
      document.querySelector(".response").textContent =
        guess > 0 ? "guess lower" : "guess higher";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".response").textContent = "You lost the game";
    }
  }
};
document.querySelector(".guess-btn").addEventListener("click", quiz);

document.querySelector(".again-btn").addEventListener("click", () => {
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "white";
  document.querySelector(".mystery").textContent = "?";
  document.querySelector(".score").textContent = 20;
  random = Math.floor(Math.random() * 20) + 1;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    quiz();
  }
});
