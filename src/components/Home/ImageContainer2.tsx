import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  url: string;
  left?: boolean;
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
}

const useStyles = makeStyles((theme) => ({
  rootCont: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      // flexDirection: 'column-reverse',
    },
  },
  RightRootCont: {
    display: "flex",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  textCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    textAlign: "center",
  },
  imgCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Container = styled.div`
  width: 94%;
  margin: 0 auto 10em auto;
  background: #1b204c;
  border: 2px solid #28315e;
  border-radius: 25px;
  padding: 38px;
`;
const Description = styled.p`
  color: white;
  font-size: 18px;
  margin: 0px;
  text-align: center;
  // font-family: "NexaTextDemo-Light"
`;

const Title = styled.p`
  color: white;
  font-size: 2em;
  font-family: "Montserrat-SemiBold";
  margin-top: 0px;
`;
const ContainerImg = styled.video`
  max-width: 300px;
  height: fit-content;
  width: 100%;
  background-size: fill;
`;

const ContainerImg1 = styled.video`
  max-width: 400px;
  width: 100%;
  background-size: cover;
`;
const ContainerImg2 = styled.video`
  // max-width: 00px;
  width: 100%;
  background-size: cover;
`;
const Spacing = styled.div`
  height: 15px;
`;

const ImageContainer2: React.FC<Props> = ({
  url,
  left,
  title,
  desc1,
  desc2,
  desc3,
}) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.rootCont}>
        <Grid item xs={12} md={12} className={classes.textCont}>
          <Title style={{ width: "100%" }}>{title}</Title>

          {/* {!url.includes("chain") && <OutlineButton>Lorem ipsum</OutlineButton>} */}
        </Grid>
        <Grid item xs={12} md={12} className={classes.imgCont}>
          {
            desc3 ? (
              <ContainerImg2 autoPlay muted loop>
                <source src={url} type="video/mp4" />
              </ContainerImg2>
            ) : desc2 ? (
              <ContainerImg1 autoPlay muted loop>
                <source src={url} type="video/mp4" />
              </ContainerImg1>
            ) : (
              <ContainerImg autoPlay muted loop>
                <source src={url} type="video/mp4" />
              </ContainerImg>
            )
            // <ContainerImg autoPlay muted loop>
            //     <source src={url} type='video/mp4'/>
            // </ContainerImg>
          }
        </Grid>
        <Grid item xs={12} md={12} className={classes.imgCont}>
          <Description>{desc1}</Description>
          {desc3 && <Spacing />}
          <Description>{desc2}</Description>
          {desc3 && <Spacing />}
          <Description>{desc3}</Description>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageContainer2;
