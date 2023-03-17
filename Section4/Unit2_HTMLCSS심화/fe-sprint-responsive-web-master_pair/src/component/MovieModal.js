import React from "react";
import styled from "styled-components";

export default function MovieModal({ onModal }) {
  return (
    <ModalBox>
      <Modal onClick={onModal} />
    </ModalBox>
  );
}

const ModalBox = styled.div`
  width: 80vw;
  height: 90vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: 68.5%;
  height: 80%;
  position: fixed;
  top: 7%;
  right: 6.5%;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3%;
`;
