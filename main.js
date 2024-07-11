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

  const cells = fillCells();

  console.log(cells);
}

document.querySelector(".solve").addEventListener("click", solve);

document.addEventListener("DOMContentLoaded", main);

let fillCells = () => {
  let cellArray = [];

  let i = 0;
  let cells = document.getElementsByClassName("cell");

  for (let cell of cells) {
    let inputs = cell.getElementsByTagName("input");

    let singleCell = Array(9).fill(0);

    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].value) {
        singleCell[j] = parseInt(inputs[j].value);
      }
    }

    cellArray.push(singleCell);
    i++;
  }

  return cellArray;
};
