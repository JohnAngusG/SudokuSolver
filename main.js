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
  while (testSudoku.some((row) => row.includes(0))) {
    generalFunc();
  }
  console.log(testSudoku);
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
};

let checkRow = (row, testNumber) => {
  return !row.includes(testNumber);
};

let checkColumn = (columnNumber, testNumber) => {
  for (let row of sudoku) {
    if (row[columnNumber] === testNumber) {
      return false;
    }
  }
  return true;
};

let generalFunc = () => {
  for (let row of testSudoku) {
    for (let cell of row) {
      if (cell == 0) {
        let indexOfCell = row.indexOf(cell);
        let options = [];
        for (let i = 1; i < 10; i++) {
          if (checkRow(row, i) && checkColumn(indexOfCell, i)) {
            options.push(i);
          }
        }
        if (options.length === 1) {
          row[indexOfCell] = options[0];
        }
      }
    }
  }
};

let testSudoku = [
  [0, 4, 2, 6, 1, 8, 9, 3, 5],
  [1, 8, 3, 2, 9, 5, 6, 4, 7],
  [6, 5, 9, 3, 7, 4, 1, 2, 8],
  [4, 7, 8, 5, 3, 6, 2, 1, 9],
  [9, 3, 1, 4, 2, 7, 5, 8, 6],
  [2, 6, 5, 9, 8, 1, 3, 7, 4],
  [3, 9, 6, 8, 4, 0, 7, 5, 1],
  [8, 2, 7, 1, 5, 9, 4, 6, 3],
  [5, 1, 4, 7, 6, 3, 8, 9, 2],
];
