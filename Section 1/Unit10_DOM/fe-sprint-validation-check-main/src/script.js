// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

//아이디 입력창에 글자를 키보드로 입력할 때
//글자 수가 4개 이상이면
//사용할 수 있는 아이디입니다 출력

//유저가 입력한 아이디
let elInputUsername = document.querySelector("#username");
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");
let elPassword = document.querySelector("#password");
let elRetypePassword = document.querySelector("#password-retype");
console.log(elRetypePassword);
let elMismatchMessage = document.querySelector(".mismatch-message");

//유저 입력 입력 시 발생하는 이벤트 처리
elInputUsername.onkeyup = function () {
  console.log(elInputUsername.value);
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  } else {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
  }
};

elRetypePassword.onkeyup = function () {
  if (isMatch(elPassword.value, elRetypePassword.value)) {
    elMismatchMessage.classList.add("hide");
  } else {
    elMismatchMessage.classList.remove("hide");
  }
};

//4글자 이상 판별함수
function isMoreThan4Length(value) {
  return value.length >= 4;
}

function isMatch(password1, password2) {
  return password1 === password2;
}
