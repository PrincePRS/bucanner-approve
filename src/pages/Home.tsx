import React, { useEffect } from "react";
import { colors, transitions } from "../styles";
import styled from "styled-components";
import BuccaneerHeader from "../components/Home/BuccaneerHeader";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../providers/StateProvider";
import { LANGUAGE_TYPES } from "../constants/context";

interface Props {
  connect: () => void;
  onApprove: () => void;
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const ApproveButton = styled.div`
  cursor: pointer;
  border-radius: 6px;
  padding: 10px 20px;
  self-align: center;
  hegith: 80px;
  border: 1px solid rgb(${colors.main});
  transition: ${transitions.button};
  &:hover {
    background-color: rgb(${colors.main});
    color: white;
  }
`;

const Home = (props: Props) => {
  const { pathname } = useLocation();
  const { setLanguage } = useStateContext();

  useEffect(() => {
    const segments = pathname.split("/").filter((segment) => segment !== "");
    if (segments.length) {
      if (segments[0] === "cn") setLanguage(LANGUAGE_TYPES.CHINESE);
      else setLanguage(LANGUAGE_TYPES.ENGLISH);
    } else {
      setLanguage(LANGUAGE_TYPES.ENGLISH);
    }
  }, [pathname]);

  return (
    <Wrapper>
      <BuccaneerHeader
        connect={props.connect}
        connected={props.connected}
        address={props.address}
        chainId={props.chainId}
        killSession={props.killSession}
      />
      <ContentWrapper>
        <ApproveButton onClick={props.onApprove}>Approve</ApproveButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Home;
