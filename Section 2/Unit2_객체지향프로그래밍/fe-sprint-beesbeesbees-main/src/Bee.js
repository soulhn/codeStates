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

//래퍼런스코드
// constructor(age, color) {
//   super(age, color);
// }와 차이가 있을까요!?라는 질문
// 과제의 컨셉이 인자 값이 없는 컨셉이기 때문에 아래의 코드가 정답

/////////////////////////////////
// class Bee extends Grub {
//   constructor() {
//     super();
//     this.age = 5;
//     this.color = "yellow";
//     this.job = "Keep on growing";
//   }
// }
