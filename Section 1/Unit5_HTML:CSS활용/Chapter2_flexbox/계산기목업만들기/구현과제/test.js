const calculator = document.querySelector(".calculator"); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector(".calculator__buttons"); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector(".calculator__operend--left"); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector(".calculator__operator"); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector(".calculator__operend--right"); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector(".calculator__result"); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  if (operator === "+") {
    result = Number(n1) + Number(n2);
  } else if (operator === "-") {
    result = Number(n1) - Number(n2);
  } else if (operator === "*") {
    result = Number(n1) * Number(n2);
  } else if (operator === "/") {
    result = Number(n1) / Number(n2);
  }
  console.log(result);
  return String(result);
}

buttons.addEventListener("click", function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches("button")) {
    if (action === "number") {
      if (firstOperend.textContent != 0) {
        secondOperend.textContent = buttonContent;
      } else {
        firstOperend.textContent = buttonContent;
      }
    }
    if (action === "operator") {
      operator.textContent = buttonContent;
    }
    if (action === "decimal") {
    }
    if (action === "clear") {
      firstOperend.textContent = "0";
      operator.textContent = "+";
      secondOperend.textContent = "0";
      calculatedResult.textContent = "0";
    }
    if (action === "calculate") {
      // let n1 = Number(firstOperend.textContent);
      // let n2 = Number(secondOperend.textContent);
      // let operator_n1n2 = operator.textContent;
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
    }
  }
});

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector(".calculator__display--for-advanced"); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener("click", function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches("button")) {
    if (action === "number") {
      if (display.textContent === "0" || previousKey === "operator" || previousKey === "calculate") {
        display.textContent = buttonContent;
      } else {
        display.textContent += buttonContent;
      }
      previousKey = "number";
    }
    if (action === "operator") {
      target.classList.add("isPressed");
      if (firstNum && operatorForAdvanced && previousKey !== "operator" && previousKey !== "calculate") {
        display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
      }
      firstNum = display.textContent;
      operatorForAdvanced = buttonContent;
      previousKey = "operator";
    }
    if (action === "decimal") {
      if (!display.textContent.includes(".") && previousKey != "operator") {
        display.textContent += ".";
      } else if (previousKey === "operator") {
        display.textContent = "0.";
      }

      previousKey = "decimal";
    }
    if (action === "clear") {
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      previousKey = "clear";
      display.textContent = "0";
    }
    if (action === "calculate") {
      if (firstNum) {
        // firstNum이 있다면
        if (previousKey === "calculate") {
          // enter를 연속적으로 눌렀다면
          display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum);
        } else {
          previousNum = display.textContent;
          display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
        }
      }
      previousKey = "calculate";
    }
  }
});
