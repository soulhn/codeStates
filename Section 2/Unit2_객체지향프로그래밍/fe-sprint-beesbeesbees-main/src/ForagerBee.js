const Bee = require("./Bee");

class ForagerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(el) {
    this.treasureChest.push(el);
  }
}

module.exports = ForagerBee;

//래퍼런스코드와 똑같다.
