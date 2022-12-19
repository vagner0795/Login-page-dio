import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #27e65d;
  color: #fff;
  border: 1px solid #27e65d;
  border-radius: 21px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:disabled {
    cursor:no-drop ;
  }
`;
