// Script: main.js
function main() {
  console.log("Welcome");
}

function solve() {
  const board = document.querySelector("#userSquare");

  if (!board.style.backgroundColor) {
    board.style.backgroundColor = "lightgrey";
  } else {
    board.style.backgroundColor = "";
  }

  fill_one();
}

document.querySelector(".solve").addEventListener("click", solve);

document.addEventListener("DOMContentLoaded", main);

let cell_one = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0-2 first row, 3-5 second row, 6-8 last row

let fill_one = () => {
  // pulls data from problem square to fill data array for first cell
  let i = 0; // need to loop through each index of the array even if there is no number there to keep the correct order
  let data = document.getElementById("cellOne").getElementsByTagName("input"); // return an array of each input tag in the cellOne div
  for (let input of data) {
    if (input.value) {
      // the empty string (no data in input field) is falsy! will only run the if statement if there is a number/something in the field. needs error handling but just first draft
      cell_one[i] = parseInt(input.value); // add to cellone array in the correct location
    }
    i++;
  }
  console.log(cell_one);
};
