import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/images/logo-large.png";
import { useTranslation } from "react-i18next";

interface Props {}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 184px;
  background: #1a234d;
  margin-top: 6em;
  border: 1px solid #414a7a;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  align-items: center;
  padding: 1em 0;
`;
const FooterLogoArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 1em;
  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
    margin-bottom: 1em;
  }
`;
const LogoTitle = styled.p`
  color: white;
  font-size: 38px;
  font-family: "Montserrat-Bold";
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;
const MenuTitle = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin: 1em 2em;
  font-family: "Montserrat-Medium";
  &:hover {
    cursor: pointer;
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue;
  }
  @media (max-width: 768px) {
    margin: 1em 2em;
  }
`;
const LinkContainer = styled.div`
  div {
    display: flex;
    align-items: center;
  }
`;
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Footer = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <Container maxWidth="lg" className={classes.main}>
        <FooterLogoArea>
          <LogoImage src={logo} />
          <LogoTitle>{t("BuccaneerV3")}</LogoTitle>
        </FooterLogoArea>
        <LinkContainer>
          <div>
            <MenuTitle
              onClick={(e) =>
                window.open(
                  "https://arbiscan.io/address/0x6048df2d0db43477ee77ff2e6d86e4339d3d5a66",
                  "_blank"
                )
              }
            >
              {t("Arbiscan")}
            </MenuTitle>

            <MenuTitle
              onClick={(e) =>
                window.open(
                  "https://coinmarketcap.com/currencies/buccaneer-v3-arbitrum/",
                  "_blank"
                )
              }
            >
              {t("CoinMarketCap")}
            </MenuTitle>
          </div>
          <div>
            <MenuTitle
              onClick={(e) =>
                window.open(
                  "https://app.uniswap.org/#/swap?outputCurrency=0x6048df2d0db43477ee77ff2e6d86e4339d3d5a66",
                  "_blank"
                )
              }
            >
              {t("Uniswap")}
            </MenuTitle>
            <MenuTitle
              onClick={(e) =>
                window.open(
                  "https://dexscreener.com/arbitrum/0x536a4a24bf31ab0d1cf0e5a11cacb319ecc9a33a",
                  "_blank"
                )
              }
            >
              {t("Chart")}
            </MenuTitle>
          </div>
        </LinkContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
