# HomenumRevelio
[Live Demo](https://vivdeg.github.io/HomenumRevelio/)

Homenum Revelio is a Harry Potter themed minesweeper game, where instead of mines, there are Death Eaters.  

### Background and Overview
When a player first clicks on a square in the grid, it will show the number of Death Eaters adjacent to that square. If it has no adjacent Death Eaters, all squares around it up to any ones that have Death Eaters adjacent to them will appear clicked. If a player clicks on a square with a Death Eater, then the player loses.  
  
The player can mark off unclicked squares with House banners, and those squares are unclickable until the player removes the banner. The goal of the game is to avoid all the Death Eaters and click all the squares which do not have a Death Eater.

## Architecture and Technologies
+ Vanilla JavaScript for game logic
+ HTML5 for rendering webpage
+ HTML5 Canvas for rendering game
+ CSS for styling webpage

## Features
+ When a square is clicked on, it either shows a number, a Death Eater, or opens the squares around it.
+ When a player right clicks on a square, a banner is placed there and the square is unclickable.
+ When a player clicks on a square with a Death Eater, the game ends and the player loses.
+ When a player clicks on all squares that do not have a Death Eater, the player wins.

### Successive Reveal of Mines
If a player clicks on a mine and loses, the remaining unflagged mines open in succession with a 0.1 second interval. This is done by using setTimeout() with a callback to the method that opens the square and a time that increases by 100ms on each asynchronous call.
``` js
revealMines(c) {
  let offset = 0;
  this.mines.forEach(mine => {
    const x = mine[0], y = mine[1];
    if (!this.grid[x][y].open && !this.grid[x][y].flagged) {
      setTimeout(() => this.grid[x][y].revealSquare(c), 100 + offset);
      offset += 100;
    }
  });
  return offset;
}
```

### Animated Opening of Squares
When a player clicks on a square, there is an animation effect similar to two sliding doors opening to the left and right, and underneath is the actual content of the square (i.e. a number, a Death Eater, or blank). Inside the animateOpen() method, a callback to itself is an argument in the requestAnimationFrame() method call, and on each iteration, the width of the drawn rectangles decreases by 1.
``` js
animateOpen(c) {

  if (this.right <= this.xPos + SIZE) {
    window.requestAnimationFrame(() => this.animateOpen(c));
    c.clearRect(this.xPos, this.yPos, SIZE, SIZE);

    ...

    c.fillStyle = "rgb(229, 199, 160)";
    c.fillRect(this.right, this.yPos, this.xPos + SIZE - this.right, SIZE);
    c.strokeStyle = "rgb(69, 18, 1)";
    c.strokeRect(this.right, this.yPos, this.xPos + SIZE - this.right, SIZE);
    this.right += 1;

    c.fillRect(this.xPos, this.yPos, this.left - this.xPos, SIZE);
    c.strokeStyle = "rgb(69, 18, 1)";
    c.strokeRect(this.xPos, this.yPos, this.left - this.xPos, SIZE);
    this.left -= 1;
  }
}
```

### Sample Gameplay
![Sample gameplay with empty squares, numbered squares, and banners](https://github.com/VivDeG/HomenumRevelio/blob/master/images/sample_game.png)
### Losing Game
![All Death Eaters revealed when player loses](https://github.com/VivDeG/HomenumRevelio/blob/master/images/sample_game_over.png)

### Features for the Future
+ Implement timer and score; when a player wins, the count on the timer will be the player's score
+ Add music and sounds for a better Harry Potter-like aesthetic
