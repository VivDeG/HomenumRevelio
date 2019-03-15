
const SIZE = 30;

class Square {
  constructor(x, y) {
    this.xPos = x * SIZE;
    this.yPos = y * SIZE;
    this.open = false;
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
    // c.clearRect(this.xPos, this.yPos, SIZE, SIZE);
    // // let img = new Image();
    // // img.src = '../images/footprints.png';
    // c.fillStyle ="rgb(200, 158, 89)";
    // c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
    // c.strokeStyle = "rgb(69, 18, 1)";
    // c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);

    this.left = this.xPos + 15;
    this.right = this.xPos + 15;
    window.requestAnimationFrame(() => this.revealSquareAnimate(c));
    this.open = true;
  }



  
  revealSquareAnimate(c) {

    if (this.right <= this.xPos + SIZE) {
      window.requestAnimationFrame(() => this.revealSquareAnimate(c));
      c.clearRect(this.xPos, this.yPos, SIZE, SIZE);
// debugger;
      // c.fillStyle = "rgb(200, 158, 89)";
      // c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
      c.strokeStyle = "rgb(69, 18, 1)";
      c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);

      // will be actual content of square
      // c.drawImage(img,30,30,30,30);

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
}

module.exports = Square;