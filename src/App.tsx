import React, { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// @ts-ignore
import Web3 from "web3";
import Web3Modal from "web3modal";
// @ts-ignore
import WalletConnectProvider from "@walletconnect/web3-provider";
// @ts-ignore
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
// @ts-ignore
import MewConnect from "@myetherwallet/mewconnect-web-client";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { getChainData } from "./helpers/utilities";
import { IAssetData } from "./helpers/types";
import {} from "./constants";
import { callApprove } from "./helpers/web3";

import ScreenWrapper from "./components/Home/ScreenWrapper";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IAppState {
  fetching: boolean;
  address: string;
  web3: any;
  provider: any;
  signer: any;
  library: any;
  connected: boolean;
  chainId: number;
  networkId: number;
  assets: IAssetData[];
  // showModal: boolean;
  pendingRequest: boolean;
  result: any | null;
  // my state
  modalText: string;
  earnText: string;
}

interface IInitValues {
  ballance: number | string;
  decoyVal: boolean;
  privateVal: boolean;
  currentTier: string;
  currentTierPrice: string;
  leftInTier: string;
  BV3Amount: string;
}

const INITIAL_STATE: IAppState = {
  fetching: false,
  address: "",
  web3: null,
  signer: null,
  provider: null,
  library: null,
  connected: false,
  chainId: 42161,
  networkId: 42161,
  assets: [],
  // showModal: false,
  pendingRequest: false,
  result: null,
  modalText: "Waiting ...",
  earnText: "",
};

const INITIAL_VALUES: IInitValues = {
  ballance: 0,
  decoyVal: false,
  privateVal: false,
  currentTier: "",
  currentTierPrice: "0",
  leftInTier: "0",
  BV3Amount: "0",
};

function initWeb3(provider: any) {
  const web3: any = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });
  return web3;
}

const history = createBrowserHistory();

const App = () => {
  const [state, setState] = useState<IAppState>(INITIAL_STATE);
  const [value, setValue] = useState<IInitValues>(INITIAL_VALUES);
  // @ts-ignore
  const [web3Modal, setWeb3Modal] = useState<Web3Modal>(null);
  const [showModal, setShowModal] = useState(false);
  // const state: IAppState;

  useEffect(() => {
    setWeb3Modal(
      new Web3Modal({
        network: getNetwork(),
        cacheProvider: true,
        providerOptions: getProviderOptions(),
        theme: {
          background: "rgba(43, 51, 94, 0.9)",
          main: "rgb(250, 250, 250)",
          secondary: "rgba(250, 250, 250, 0.7)",
          border: "rgba(196, 196, 196, 0.3)",
          hover: "rgba(53, 61, 104, 0.75)",
        },
      })
    );
  }, []);

  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      onConnect();
    }
  }, [web3Modal?.cachedProvider]);

  const onConnect = async () => {
    const provider = await web3Modal.connect();
    // const library = new ethers.providers.Web3Provider(provider);
    // const signer = library.getSigner();
    // setState({ ...state, library, signer });
    await subscribeProvider(provider);

    const web3: any = initWeb3(provider);

    const accounts = await web3.eth.getAccounts();

    const address = accounts[0];

    const networkId = await web3.eth.net.getId();

    const chainId = await web3.eth.chainId();

    setState({
      ...state,
      web3,
      provider,
      connected: true,
      address,
      chainId,
      networkId,
    });
    setShowModal(false);
  };

  const reConnect = async () => {
    try {
      setShowModal(true);
      const provider = await web3Modal.connect();

      const web3: any = initWeb3(provider);

      const accounts = await web3?.eth?.getAccounts();
      const address = accounts[0];

      const networkId = await web3.eth.net.getId();

      const chainId = await web3.eth.chainId();
      if (chainId !== 42161 && chainId !== 1) {
        toast.error(
          "Unspported Network. Switch to Mainnet or Arbitrum Mainnet."
        );
      }

      setState({
        ...state,
        web3,
        address,
        chainId,
        networkId,
      });
      setShowModal(false);
    } catch (err) {
    } finally {
      setShowModal(false);
    }
  };

  const subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }
    provider.on("close", () => resetApp());
    provider.on("accountsChanged", async (accounts: string[]) => {
      reConnect();
    });
    provider.on("chainChanged", async (chainId: number) => {});

    provider.on("networkChanged", async (networkId: number) => {
      reConnect();
    });
  };

  const getNetwork = () => getChainData(state.chainId).network;

  const getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
          appName: "Mummy.io",
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
      portis: {
        package: Portis,
        options: {
          id: process.env.REACT_APP_PORTIS_ID,
        },
      },
      fortmatic: {
        package: Fortmatic,
        options: {
          key: process.env.REACT_APP_FORTMATIC_KEY,
        },
      },
      mewconnect: {
        package: MewConnect, // required
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID, // required
        },
      },
    };
    return providerOptions;
  };

  const onSetModalText = (txt: string) => {
    setState({ ...state, modalText: txt });
  };

  const onApprove = async () => {
    if (showModal) return false;
    let contractCall = callApprove;
    if (!contractCall) {
      throw new Error(
        `No matching contract calls for functionSig= callGetAuctions`
      );
    }

    const { web3, chainId, address } = state;
    if (!web3) {
      toast.error("Connect wallet.");
      return;
    }
    if (chainId !== 42161 && chainId !== 1) {
      toast.error("Unspported Network. Switch to Mainnet or Arbitrum Mainnet.");
      return;
    }
    try {
      setShowModal(true);
      onSetModalText("Waiting ...");
      const result = await contractCall(web3, chainId, address);
      if (result) {
        toast.success("Transaction Successful");
        return true;
      } else {
        notify();
      }
      return true;
    } catch (error) {
      console.error(error); // tslint:disable-line
      notify();
      return true;
    } finally {
      setShowModal(false);
    }
  };

  const resetApp = async () => {
    const { web3 } = state;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setState(INITIAL_STATE);
    setValue(INITIAL_VALUES);
  };

  const notify = () => toast.error("Transaction Failed");

  const render = () => {
    const { web3, address, connected, chainId, modalText } = state;

    return (
      <ScreenWrapper>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  connect={onConnect}
                  connected={connected}
                  address={address}
                  chainId={chainId}
                  killSession={resetApp}
                  onApprove={onApprove}
                />
              )}
            />
          </Switch>
        </Router>
        <ToastContainer />
      </ScreenWrapper>
    );
  };

  return render();
};

export default App;
