const Board = require('./board');
import { LEFT_CLICK, RIGHT_CLICK } from './board';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('canvas');
  canvas.width = 480;
  canvas.height = 480;
  let c = canvas.getContext('2d');

  const board = new Board();
  board.draw(c);

  let x, y;

  canvas.addEventListener('mousemove', e => {
    x = e.pageX - canvas.offsetLeft;
    y = e.pageY - canvas.offsetTop;
  });

  canvas.addEventListener('click', (e) => {
    console.log(`${x}, ${y}`);
    let button;
    if (e.altKey || e.shiftKey || e.ctrlKey || e.metaKey) {
      button = RIGHT_CLICK;
    } else {
      button = LEFT_CLICK;
    }
    board.findClickedSquare(x,y,button,c);
  }, false);
  
  window.addEventListener('keypress', e => {
    e.preventDefault();
    if (e.key == 'f' || e.key == 'F') {
      const button = RIGHT_CLICK;
      board.findClickedSquare(x,y,button,c);
    }
  }, false);
  
  // canvas.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  //   const x = e.pageX - canvas.offsetLeft;
  //   const y = e.pageY - canvas.offsetTop;
  //   const button = RIGHT_CLICK;
  //   board.findClickedSquare(x,y,button,c);
  // }, false);

  
});