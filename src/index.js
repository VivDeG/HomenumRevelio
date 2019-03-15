const Board = require('./board');

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('canvas');
  canvas.width = 480;
  canvas.height = 480;
  let c = canvas.getContext('2d');

  const board = new Board(canvas, c);
  board.draw();

  canvas.addEventListener('click', (e) => {
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;
    board.findClickedSquare(x,y);
  }, false);

  
});