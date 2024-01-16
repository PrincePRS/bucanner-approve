import React from "react";
import styled from "styled-components";
import { colors } from "../styles";

interface Props {
  title: string;
  onClick?: (e: any) => void;
}
const ButtonContainer = styled.div`
  width: 272px;
  border-radius: 20px;
  height: 54px;
  border: 1px solid rgb(${colors.fontColor});
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
  transition: all 0.2s ease-out;
  text-align: center;
  p {
    color: white;
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
    background: #fafafa;
    p {
      color: rgb(${colors.main});
    }
  }
`;

const SaleButton = (props: Props) => {
  return (
    <ButtonContainer onClick={props.onClick}>
      <p>{props.title}</p>
    </ButtonContainer>
  );
};

export default SaleButton;
