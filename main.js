// Script: main.js
function main() {
  console.log('Welcome');
}

function solve() {
  const sudoku = getInputs();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] === 0) {
        console.log(`Empty cell at x: ${i}, y: ${j}`);
        let possibleValues = [];

        for (let value = 1; value <= 9; value++) {
          if (isValid(value, i, j, sudoku)) {
            possibleValues.push(value);
          }
        }

        if (possibleValues.length === 1) {
          sudoku[i][j] = possibleValues[0];
        }
      }
    }
  }
}

function isValid(value, x, y, sudoku) {
  return (
    checkRow(value, x, y, sudoku) &&
    checkColumn(value, x, y, sudoku) &&
    checkSquare(value, x, y, sudoku)
  );
}

function checkRow(value, x, y, sudoku) {
  // Todo!
}

function checkColumn(value, x, y, sudoku) {
  // Todo!
}

function checkSquare(value, x, y, sudoku) {
  // Todo!
}

function getInputs() {
  const board = [];

  const rows = document.querySelectorAll('.row');

  for (let row of rows) {
    const inputs = row.querySelectorAll('input');
    const dataRow = [];

    inputs.forEach((input) => {
      dataRow.push(input.value ? parseInt(input.value) : 0);
    });

    board.push(dataRow);
  }

  return board;
}

document.querySelector('.solve').addEventListener('click', solve);

document.addEventListener('DOMContentLoaded', main);
