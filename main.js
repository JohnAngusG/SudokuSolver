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

  fill_data();
  console.log(checkRow(0, 1));
  console.log(checkColumn(0, 1));
}

document.querySelector(".solve").addEventListener("click", solve);

document.addEventListener("DOMContentLoaded", main);

let sudoku = [];

let fill_data = () => {
  let data = document.querySelectorAll(".sudokuRow");
  for (let rows of data) {
    let row = [];
    for (let input of rows.getElementsByTagName("input")) {
      if (input.value) {
        row.push(parseInt(input.value));
      } else {
        row.push(0);
      }
    }
    sudoku.push(row);
  }
  console.log(sudoku);
};

let checkRow = (rowNumber, testNumber) => {
  return sudoku[rowNumber].includes(testNumber);
};

let checkColumn = (columnNumber, testNumber) => {
  for (let row of sudoku) {
    console.log(row[columnNumber]);
    if (row[columnNumber] === testNumber) {
      return false;
    }
  }
  return true;
};
