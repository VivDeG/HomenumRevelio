# HomenumRevelio
[Live Demo](https://vivdeg.github.io/HomenumRevelio/)

Homenum Revelio is a Harry Potter themed minesweeper game, where instead of mines, there are Death Eaters.  
  
When a player first clicks on a square in the grid, it will show the number of Death Eaters adjacent to that square. If it has no adjacent Death Eaters, all squares around it up to any ones that have Death Eaters adjacent to them will appear clicked. If a player clicks on a square with a Death Eater, then the player loses.  
  
The player can mark off unclicked squares with House banners, and those squares are unclickable until the player removes the banner. The goal of the game is to avoid all the Death Eaters and click all the squares which do not have a Death Eater.

## Architecture and Technologies
+ Vanilla JavaScript for game logic
+ HTML5 for rendering webpage
+ HTML5 Canvas for rendering game
+ CSS for styling webpage

## Functionality and MVP Features
+ When a square is clicked on, it either shows a number, a Death Eater, or opens the squares around it.
+ When a player right clicks on a square, a banner is placed there and the square is unclickable.
+ When a player clicks on a square with a Death Eater, the game ends and the player loses.
+ When a player clicks on all squares that do not have a Death Eater, the player wins.

### Sample Gameplay
![Sample gameplay with empty squares, numbered squares, and banners](https://github.com/VivDeG/HomenumRevelio/blob/master/images/sample_game.png)
### Losing Game
![All Death Eaters revealed when player loses](https://github.com/VivDeG/HomenumRevelio/blob/master/images/sample_game_over.png)

## Implementation Timeline
Day 1:
+ Review games from instructional curriculum
+ Build project skeleton and functionality
  
Day 2:
+ Complete board design and rendering
+ Add animations
  
Day 3:
+ Determine conditional logic for clicking on a square
+ Add placement of Death Eaters and getting value of a square
  
Day 4:
+ Complete logic for auto-clicking around square with no Death Eater or adjacent Death Eater
+ Complete MVPs
+ Clean up styling
