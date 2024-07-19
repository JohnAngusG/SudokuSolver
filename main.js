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
  generalFunc();
  console.log(sudoku);
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

let checkRow = (row, testNumber) => {
  return row.includes(testNumber);
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

let generalFunc = () => {
  for (let row of sudoku) {
    for (let cell of row) {
      if (!cell) {
        let indexOfCell = row.indexOf(cell);
        let options = [];
        for (let i = 1; i < 10; i++) {
          if (checkRow(row, i) && checkColumn(indexOfCell, i)) {
            options.push(i);
          }
        }
        if (options.length === 1) {
          row[indexOfCell] = options.pop();
        }
      }
    }
  }
};
