import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { colors } from "../../styles";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0%;
  // border: 1px solid #4F5578;
`;

const LogoTitle = styled.h3`
  font-family: "Montserrat-Bold";
  color: rgb(${colors.fontColor});
  font-size: 22px;
  margin: 0 0.6em;
  @media (max-width: 570px) {
    font-size: 22px;
  }
`;

const imgStyle = {
  width: 52,
  height: 52,
};

function LogoArea() {
  const { t } = useTranslation();
  return (
    <LogoContainer>
      <img src={logo} style={imgStyle} alt="logo" />
      <LogoTitle>{t("BuccaneerV3")}</LogoTitle>
    </LogoContainer>
  );
}

export default LogoArea;
