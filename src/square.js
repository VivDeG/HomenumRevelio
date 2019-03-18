
const SIZE = 30;

class Square {
  constructor(x, y, value) {
    this.xPos = x * SIZE;
    this.yPos = y * SIZE;
    this.value = value;
    this.open = false;
    this.flagged = false;

    this.img1 = new Image();
    this.img1.src = 'images/slytherin_banner.png';
    this.img2 = new Image();
    this.img2.src = 'images/ravenclaw_banner.png';
    this.img3 = new Image();
    this.img3.src = 'images/hufflepuff_banner.png';
    this.img4 = new Image();
    this.img4.src = 'images/gryffindor_banner.png';
    this.banners = [this.img1, this.img2, this.img3, this.img4];

    this.deathEater = new Image();
    this.deathEater.src = 'images/death_eater.png';
  }

  draw(c) {
    c.fillStyle = "rgb(229, 199, 160)";
    c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
    c.strokeStyle = "rgb(69, 18, 1)";
    c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);
  }

  clicked(x, y, c) {
    c.beginPath();
    c.moveTo(this.xPos + 1, this.yPos + 1);
    c.lineTo(this.xPos + SIZE - 1, this.yPos + 1);
    c.lineTo(this.xPos + SIZE - 1, this.yPos + SIZE - 1);
    c.lineTo(this.xPos + 1, this.yPos + SIZE - 1);
    c.closePath();
    return c.isPointInPath(x, y);
  }
  
  revealSquare(c) {
    /* non-animated opening of square */
    // c.clearRect(this.xPos, this.yPos, SIZE, SIZE);
  
    // c.fillStyle ="rgb(200, 158, 89)";
    // c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
    // c.strokeStyle = "rgb(69, 18, 1)";
    // c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);

console.log(this.value);
    this.left = this.xPos + 15;
    this.right = this.xPos + 15;
    window.requestAnimationFrame(() => this.animateOpen(c));
    this.open = true;
  }

  toggleFlag(c) {
    if (this.flagged) {
      c.clearRect(this.xPos, this.yPos, SIZE, SIZE);

      c.fillStyle = "rgb(229, 199, 160)";
      c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
      c.strokeStyle = "rgb(69, 18, 1)";
      c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);

      this.flagged = false;
    } else {
      this.flag = this.banners[Math.floor(Math.random() * this.banners.length)];
      c.drawImage(this.flag, this.xPos + 5, this.yPos + 2, SIZE - 10, SIZE - 4);
      this.flagged = true;
    }
  }

  setOpen() {
    this.open = true;
  }

  hasMine() {
    return this.value == -1;
  }

  
  animateOpen(c) {

    if (this.right <= this.xPos + SIZE) {
      window.requestAnimationFrame(() => this.animateOpen(c));
      c.clearRect(this.xPos, this.yPos, SIZE, SIZE);

      // c.fillStyle = "rgb(200, 158, 89)";
      // c.fillRect(this.xPos, this.yPos, SIZE, SIZE);
      c.strokeStyle = "rgb(69, 18, 1)";
      c.strokeRect(this.xPos, this.yPos, SIZE, SIZE);

      // will be actual content of square
      if (this.hasMine()) {
        c.drawImage(this.deathEater, this.xPos + 5, this.yPos + 2, SIZE - 10, SIZE - 4);
      }

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

export default Square;