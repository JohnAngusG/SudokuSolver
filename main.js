// Script: main.js
function main() {
  console.log('Welcome');
}

function solve() {
  const board = document.querySelector('#userSquare');

  if (!board.style.backgroundColor) {
    board.style.backgroundColor = 'lightgrey';
  } else {
    board.style.backgroundColor = '';
  }

  const cells = fillCells();

  console.log(cells);
}

document.querySelector('.solve').addEventListener('click', solve);

document.addEventListener('DOMContentLoaded', main);
