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
  while (testSudoku.some((row) => row.includes(0)) && counter < 100000) {
    generalFunc();
  }
  console.log(testSudoku);
  console.log(counter);
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

let checkSquare = (row, columnNumber, testNumber) => {
  // square 1: 0: [0, 1, 2] Square 2: 0: [3, 4, 5] Square 3: 0: [6, 7, 8]
  //           1: [0, 1, 2]           1: [3, 4, 5]           1: [6, 7, 8]
  //           2: [0, 1, 2]           2: [3, 4, 5]           2: [6, 7, 8]
  //
  // square 4: 3: [0, 1, 2] Square 5: 3: [3, 4, 5] Square 6: 3: [6, 7, 8]
  //           4: [0, 1, 2]           4: [3, 4, 5]           4: [6, 7, 8]
  //           5: [0, 1, 2]           5: [3, 4, 5]           5: [6, 7, 8]
  //
  // square 7: 6: [0, 1, 2] Square 8: 6: [3, 4, 5] Square 9: 6: [6, 7, 8]
  //           7: [0, 1, 2]           7: [3, 4, 5]           7: [6, 7, 8]
  //           8: [0, 1, 2]           8: [3, 4, 5]           8: [6, 7, 8]

  return true;
};

let counter = 0;
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

          if (options.length > 1) {
            break;
          }
        }
        if (options.length === 1) {
          row[indexOfCell] = options[0];
        }
      }
    }
  }
  counter++;
};

let testSudoku = [
  [7, 4, 2, 6, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 9, 5, 6, 0, 7],
  [6, 0, 0, 0, 7, 0, 1, 0, 8],
  [4, 7, 8, 5, 0, 6, 0, 0, 0],
  [9, 0, 0, 4, 0, 7, 5, 8, 0],
  [0, 0, 0, 0, 0, 1, 3, 7, 4],
  [0, 0, 6, 8, 4, 0, 0, 0, 1],
  [8, 2, 7, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 7, 6, 0, 0, 9, 0],
];
