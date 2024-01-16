import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import { useHistory } from "react-router-dom";
import { colors } from "../../styles";

interface MenuAreaProps {
  connected: boolean;
  address: string;
  chainId: number;
  killSession: () => void;
  openModal: () => void;
}

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 50%;
  justify-content: flex-end;
`;

const MenuArea: React.FC<MenuAreaProps> = ({
  killSession,
  openModal,
  connected,
  address,
  chainId,
}) => {
  return (
    <MenuContainer>
      {connected && (
        <Header
          connected={connected}
          address={address}
          chainId={chainId}
          killSession={killSession}
        />
      )}
      {connected && (chainId === 1 || chainId === 42161) && (
        <div style={{ color: "white", marginRight: "20px" }}>
          {chainId === 1 ? "Mainnet" : "Arbitrum"}
        </div>
      )}
    </MenuContainer>
  );
};

export default MenuArea;
