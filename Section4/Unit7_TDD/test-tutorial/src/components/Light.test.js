import { fireEvent, render, screen } from "@testing-library/react";
import Light from "./Light";
//getByText를 이용하여 props로 전달된 전원이 올바르게 표시되어 있는지 확인
it("renders Light Component", () => {
  render(<Light name="전원" />);
  const nameElement = screen.getByText(/전원 off/i);
  expect(nameElement).toBeInTheDocument();
});

// 버튼 클릭 이벤트의 유무
it("change from off to on", () => {
  render(<Light name="전원" />);
  const onButtonElement = screen.getByRole("button", { name: "ON" });
  fireEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
});
