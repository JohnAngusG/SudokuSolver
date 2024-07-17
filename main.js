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

  fill_data();
}

document.querySelector('.solve').addEventListener('click', solve);

document.addEventListener('DOMContentLoaded', main);

let cells = [];

let fill_data = () => {
  let data = document.querySelectorAll('.cell');
  for (let cell of data) {
    let square = [];
    for (let input of cell.getElementsByTagName('input')) {
      if (input.value) {
        square.push(parseInt(input.value));
      } else {
        square.push(0);
      }
    }
    cells.push(square);
  }
  console.log(cells);
};
