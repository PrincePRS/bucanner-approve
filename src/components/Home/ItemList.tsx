import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

import icognito from "../../assets/images/icognito.png";
import consent from "../../assets/images/consent.png";
import coinbox from "../../assets/images/coinbox.png";
import { useTranslation } from "react-i18next";

const ItemContainer = styled.div`
  width: 94%;
  margin: 8em auto;
  @media (max-width: 960px) {
    margin: 3em auto;
  }
`;

function ItemList() {
  const { t } = useTranslation();
  return (
    <ItemContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card url={icognito} content={t("IcognitoText")} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card url={consent} content={t("ConsentText")} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card url={coinbox} content={t("CoinboxText")} />
        </Grid>
      </Grid>
    </ItemContainer>
  );
}

export default ItemList;
