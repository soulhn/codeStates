import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin : 0.5rem;
  }
`;

const BlueButton = styled.button`
  background-color: blue;
  color: white;
`;

//만들어진 컴포넌트를 재활용해 컴포넌트를 만들 수 있습니다.
const BigBlueButton = styled(BlueButton)`
  padding: 10px;
  margin-top: 10px;
`;

//재활용한 컴포넌트를 재활용할 수도 있습니다.
const BigRedButton = styled(BigBlueButton)`
  background-color: red;
`;

const Button1 = styled.button`
  background: ${(props) => (props.skyblue ? "skyblue" : "white")};
`;

//받아온 prop 값을 그대로 이용해 렌더링할 수도 있습니다
const Button2 = styled.button`
  background: ${(props) => (props.color ? props.color : "white")};
`;
//다음과 같은 형식으로도 활용할 수 있습니다.
const Button3 = styled.button`
  background: ${(props) => props.color || "white"};
`;

//실습 코드
const QuizButton = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background: powderblue;
  border-radius: 1rem;
  transition: 0.5s;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BlueButton>너무 작다</BlueButton>
        <BigBlueButton>블루 버튼</BigBlueButton>
        <BigRedButton>레드 버튼</BigRedButton>
        {/* 프롭스 활용 */}
        <Button1>Button1 </Button1>
        <Button1 skyblue>SkyBlue.Props</Button1>
        <Button2 color="yellow">버튼 2번째</Button2>
        <Button3 color="green">버튼 3번째</Button3>
        {/* 실습 코드 */}
        <QuizButton id="practice">Practice!</QuizButton>
      </header>
    </div>
  );
}

export default App;
