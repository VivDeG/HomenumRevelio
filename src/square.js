
const SIZE = 30;

class Square {
  constructor(x, y) {
    this.xPos = x * SIZE;
    this.yPos = y * SIZE;
  }

  draw(c) {
    c.fillStyle = "rgb(229, 199, 160)";
    c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
    c.strokeStyle = "rgb(69, 18, 1)";
    c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);
    // requestAnimationFrame(this.revealSquare(c));
  }

  clicked(x, y, c) {
    c.beginPath();
    c.moveTo(this.xPos + 1, this.yPos + 1);
    c.lineTo(this.xPos + SIZE - 1, this.yPos + 1);
    c.lineTo(this.xPos + SIZE - 1, this.yPos + SIZE - 1);
    c.lineTo(this.xPos + 1, this.yPos + SIZE - 1);
    c.closePath();
    return c.isPointInPath(x,y);
  }
  
  revealSquare(c) {
    c.clearRect(this.xPos, this.yPos, SIZE, SIZE);
    // let img = new Image();
    // img.src = '../images/footprints.png';
    c.fillStyle ="rgb(200, 158, 89)";
    c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
    c.strokeStyle = "rgb(69, 18, 1)";
    c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);
  }



  
  // revealSquareAnimate(c) {
  //   let left = this.xPos + 15;
  //   let right = this.xPos + 15;

  //   if (right <= this.xPos + SIZE) {
  //     requestAnimationFrame(this.revealSquareAnimate(c));
  //     c.clearRect(this.xPos, this.yPos, SIZE, SIZE);

  //     // c.fillStyle = "rgb(241, 196, 138)";
  //     // c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
  //     c.strokeStyle = "rgb(69, 18, 1)";
  //     c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);

  //     // will be actual content of square
  //     // c.drawImage(img,30,30,30,30);

  //     c.fillStyle = "rgb(201, 143, 67)";
  //     c.fillRect(right, this.yPos, this.xPos + SIZE - right, this.yPos);
  //     c.strokeStyle = "rgb(69, 18, 1)";
  //     c.strokeRect(right, this.yPos, this.xPos + SIZE - right, this.yPos);
  //     right += 1;

  //     c.fillRect(this.xPos, this.yPos, left - this.xPos, this.yPos);
  //     c.strokeStyle = "rgb(69, 18, 1)";
  //     c.strokeRect(this.xPos, this.yPos, left - this.xPos, this.yPos);
  //     left -= 1;
  //   }
  // }
}

module.exports = Square;