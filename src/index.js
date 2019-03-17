import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  canvas.width = 480;
  canvas.height = 480;
  const c = canvas.getContext('2d');

  const game = new Game();
  game.draw(c);

  canvas.addEventListener('click', (e) => {
    game.handleEvent(e,canvas,c);
  }, false);
  
  canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    game.handleEvent(e, canvas, c);
  }, false);  
});