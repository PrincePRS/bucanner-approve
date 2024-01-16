import { IChainData } from "./types";

const supportedChains: IChainData[] = [
  {
    name: "Ethereum Mainnet",
    short_name: "eth",
    chain: "ETH",
    network: "mainnet",
    chain_id: 1,
    network_id: 1,
    rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Arbitrum One Mainnet",
    short_name: "arb",
    chain: "arbitrum",
    network: "mainnet",
    chain_id: 42161,
    network_id: 42161,
    rpc_url: "https://arb1.arbitrum.io/rpc",
    native_currency: {
      symbol: "ETH",
      name: "ETH",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
];

export default supportedChains;
