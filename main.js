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

document.getElementById("#userSquare");

let cell_one = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let fill_one = () => {
  let i = 0;
  let data = document.getElementById("cellOne").getElementsByTagName("input");
  for (let input of data) {
    if (input.value) {
      cell_one[i] = parseInt(input.value);
    }
    i++;
  }
  console.log(cell_one);
};
