var board = '';

do {
    var boardSize = +prompt('Введите размер', '');
} while (!boardSize || boardSize == '' || isNaN(boardSize));

for (x = 0; x < boardSize; x++) {
  for (y = 0; y < boardSize; y++) {
    if ((x + y) % 2 == 0) {
      board += '#';
    } else {
    board += ' ';
    }
  }
  board += '\n';
}

console.log(board);