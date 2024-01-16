import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";
import "./index.css";
import App from "./App";
import { globalStyle } from "./styles";
import { StateProvider } from "./providers/StateProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const GlobalStyle: GlobalStyleComponent<
  React.ReactNode,
  DefaultTheme
> = createGlobalStyle`
  ${globalStyle}
`;

// @ts-ignore
declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    Box: any;
    box: any;
    space: any;
  }
}

ReactDOM.render(
  <>
    <GlobalStyle />
    <I18nextProvider i18n={i18n}>
      <StateProvider>
        <App />
      </StateProvider>
    </I18nextProvider>
  </>,
  document.getElementById("root")
);
