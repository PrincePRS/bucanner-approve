import React from "react";
import styled from "styled-components";
import MenuArea from "./MenuArea";
import SocialLinkArea from "./SocialLinkArea";
import { colors } from "../../styles";

const Wrapper = styled.div`
  background-color: rgb(${colors.main});
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: flex-end;
  // border: 1px solid #4F5578;
  margin-left: -0%;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
interface Props {
  connect: () => void;
  connected: boolean;
  address: string;
  chainId: number;
  killSession: () => void;
}

const BuccaneerHeader: React.FC<Props> = ({
  connect,
  killSession,
  connected,
  address,
  chainId,
}) => {
  return (
    <Wrapper>
      <MenuArea
        connected={connected}
        address={address}
        chainId={chainId}
        killSession={killSession}
        openModal={connect}
      />
      <SocialLinkArea
        openModal={connect}
        connected={connected}
        chainId={chainId}
      />
    </Wrapper>
  );
};

export default BuccaneerHeader;
