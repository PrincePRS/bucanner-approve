import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import ArrowIcon from "../assets/icons/ArrowIcon";
import CloseIcon from "../assets/icons/CloseIcon";
import InfoIcon from "../assets/icons/InfoIcon";

interface TooltipProps {
  text: string;
  show?: boolean;
  setVisible: (show: boolean) => void;
}

interface TooltipContainerProps {
  isOpen: boolean;
}

const TooltipContainer = styled.div<TooltipContainerProps>`
  display: flex;
  width: 70%;
  margin: 10px auto;
  align-items: center;
  justify-content: space-between;
  word-break: break-word;
  padding: 10px 20px;
  gap: 10px;
  font-size: 18px;
  color: #fafafa;
  opacity: 0.7;
  border: ${(props) =>
    props.isOpen ? "1px solid rgba(196, 196, 196, 0.3)" : "none"};
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 10px 10px;
  }
`;

const Tooltip: React.FC<TooltipProps> = ({ text, show, setVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<any>(null);

  const RunTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        setVisible(false);
        setIsOpen(false);
      }, 30000);
    }
  };

  useEffect(() => {
    if (show) {
      RunTimer();
    } else setIsOpen(false);
  }, [show]);

  return text && show ? (
    <TooltipContainer isOpen={isOpen}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <InfoIcon size={24} />
      </div>
      <span style={{ textAlign: "center" }}>{isOpen ? text : ""}</span>
      {isOpen && (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isOpen) {
              setVisible(false);
              setIsOpen(false);
            } else setIsOpen(true);
          }}
        >
          <CloseIcon size={24} />
        </div>
      )}
    </TooltipContainer>
  ) : null;
};

export default Tooltip;
