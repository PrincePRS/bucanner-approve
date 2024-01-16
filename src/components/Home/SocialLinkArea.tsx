import React from "react";
import styled from "styled-components";
import wallet from "../../assets/images/wallet.png";

interface SocialAreaProps {
  openModal: () => void;
  connected: boolean;
  chainId: number;
}
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0em;

  // border: 1px solid #4F5578;
`;

const SocialIcon = styled.img`
  width: 25px;
  height: 23px;
  margin: 0 1em;
  background-size: contain;
  &:hover {
    -webkit-filter: invert(1);
    filter: invert(1);
    cursor: pointer;
    transition: all 0.3s;
  }
`;

const TextMenuIcon = styled.div`
  display: flex;
  font-family: "Montserrat-SemiBold";
  flex-direction: column;
  margin: 0 1em;
  background-size: contain;
  color: red;
  font-size: 13px;
  text-align: center;
`;

const SocialLinkArea: React.FC<SocialAreaProps> = ({
  openModal,
  connected,
  chainId,
}) => {
  return (
    <SocialContainer>
      {connected && chainId !== 42161 && chainId !== 1 && (
        <TextMenuIcon>
          <label>Wrong</label>
          <label>Network</label>
        </TextMenuIcon>
      )}
      {!connected && <SocialIcon src={wallet} onClick={openModal} />}
    </SocialContainer>
  );
};

export default SocialLinkArea;
