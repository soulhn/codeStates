const Grub = require("./Grub");

class Bee extends Grub {
  constructor(age, color) {
    super(age, color);
    this.age = 5;
    this.color = "yellow";
    this.job = "Keep on growing";
  }
}

module.exports = Bee;
