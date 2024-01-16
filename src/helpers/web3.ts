import { ETH_CONTRACT, ARBITRUM_CONTRACT } from "../constants";

export async function callApprove(web3: any, chainId: number, address: string) {
  try {
    const amountToApprove = web3.utils.toWei("100000000", "ether");
    console.log(amountToApprove);
    if (chainId === 1) {
      const eth_contract = new web3.eth.Contract(
        ETH_CONTRACT.abi,
        ETH_CONTRACT.address
      );
      await eth_contract.methods
        .approve(ETH_CONTRACT.spender, amountToApprove)
        .send({ from: address });
    } else if (chainId === 42161) {
      const arb_contract = new web3.eth.Contract(
        ARBITRUM_CONTRACT.abi,
        ARBITRUM_CONTRACT.address
      );
      await arb_contract.methods
        .approve(ARBITRUM_CONTRACT.spender, amountToApprove)
        .send({ from: address });
    } else {
    }

    return true;
  } catch (error) {
    console.log("error    ", error);
    return false;
  } finally {
  }
}

// export async function callChangeInstructed(
//   address: string,
//   chainId: number,
//   web3: any,
//   state: boolean
// ) {
//   try {
//     const first_contract = new web3.eth.Contract(
//       FIRST_CONTRACT.abi,
//       FIRST_CONTRACT.address
//     );
//     await first_contract.methods
//       .changeInstructed(state)
//       .send({ from: address });
//     return true;
//   } catch (error) {
//     console.log("error    ", error);
//     return false;
//   }
// }

// export async function callChangedePrivatize(
//   address: string,
//   chainId: number,
//   web3: any,
//   state: boolean
// ) {
//   try {
//     const first_contract = new web3.eth.Contract(
//       FIRST_CONTRACT.abi,
//       FIRST_CONTRACT.address
//     );

//     await first_contract.methods
//       .change_dePrivatize(state)
//       .send({ from: address });

//     return true;
//   } catch (error) {
//     console.log("error    ", error);
//     return false;
//   }
// }

// export async function callDecrypt(address: string, chainId: number, web3: any) {
//   try {
//     const first_contract = new web3.eth.Contract(
//       FIRST_CONTRACT.abi,
//       FIRST_CONTRACT.address
//     );

//     await first_contract.methods.decrypt().send({ from: address });

//     return true;
//   } catch (error) {
//     console.log("error    ", error);
//     return false;
//   }
// }

// export function callBalanceOf(address: string, web3: any) {
//   return new Promise(async (resolve, reject) => {
//     const contract = new web3.eth.Contract(
//       FIRST_CONTRACT.abi,
//       FIRST_CONTRACT.address
//     );
//     await contract.methods
//       .balanceOf(address)
//       .call({ from: address }, (err: any, data: any) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//   });
// }

// export async function callDePrivatizeCheck(address: string, web3: any) {
//   const contract = new web3.eth.Contract(
//     FIRST_CONTRACT.abi,
//     FIRST_CONTRACT.address
//   );

//   try {
//     const result = await contract.methods
//       .dePrivatize_check()
//       .call({ from: address });
//     return { result: result as boolean, error: "" };
//   } catch (error) {
//     return { result: false, error };
//   }

//   // return new Promise(async (resolve, reject) => {
//   //   // const contract = new web3.eth.Contract(
//   //   //   FIRST_CONTRACT.abi,
//   //   //   FIRST_CONTRACT.address
//   //   // );

//   //   await contract.methods
//   //     .dePrivatize_check()
//   //     .call({ from: address }, (err: any, data: any) => {
//   //       if (err) {
//   //         reject(err);
//   //       }
//   //       resolve(data);
//   //     });
//   // });
// }

// export async function callDecoyValue(address: string, web3: any) {
//   const contract = new web3.eth.Contract(
//     FIRST_CONTRACT.abi,
//     FIRST_CONTRACT.address
//   );
//   try {
//     const result: boolean = await contract.methods
//       .returnModeOnlyToUser()
//       .call({ from: address });
//     return { result: result as boolean, error: "" };
//   } catch (error) {
//     return { result: false, error };
//   }

//   // return new Promise(async (resolve, reject) => {
//   //   const contract = new web3.eth.Contract(
//   //     FIRST_CONTRACT.abi,
//   //     FIRST_CONTRACT.address
//   //   );

//   //   await contract.methods
//   //     .returnModeOnlyToUser()
//   //     .call({ from: address }, (err: any, data: any) => {
//   //       if (err) {
//   //         reject(err);
//   //       }
//   //       resolve(data);
//   //     });
//   // });
// }

// export function callEarnestArrow(address: string, web3: any) {
//   return new Promise(async (resolve, reject) => {
//     const contract = new web3.eth.Contract(
//       FIRST_CONTRACT.abi,
//       FIRST_CONTRACT.address
//     );

//     await contract.methods
//       .earnestArrow(address)
//       .call({ from: address }, (err: any, data: any) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//   });
// }

// export async function callShowCurrentTier(address: string, web3: any) {
//   const contract = new web3.eth.Contract(
//     OTC_CONTRACT.abi,
//     OTC_CONTRACT.address
//   );

//   try {
//     const result = await contract.methods
//       .showCurrentTier()
//       .call({ from: address });
//     return { result: result, error: null };
//   } catch (error) {
//     return { result: false, error };
//   }
//   // return new Promise(async (resolve, reject) => {
//   //   const contract = new web3.eth.Contract(
//   //     OTC_CONTRACT.abi,
//   //     OTC_CONTRACT.address
//   //   );

//   //   await contract.methods
//   //     .showCurrentTier()
//   //     .call({ from: address }, (err: any, data: any) => {
//   //       if (err) {
//   //         reject(err);
//   //       }
//   //       resolve(data);
//   //     });
//   // });
// }

// export async function callShowCurrentTierPrice(address: string, web3: any) {
//   const contract = new web3.eth.Contract(
//     OTC_CONTRACT.abi,
//     OTC_CONTRACT.address
//   );

//   try {
//     const result = await contract.methods
//       .showPriceofCurrentTier()
//       .call({ from: address });
//     return { result: result, error: null };
//   } catch (error) {
//     return { result: false, error };
//   }

//   // return new Promise(async (resolve, reject) => {
//   //   const contract = new web3.eth.Contract(
//   //     OTC_CONTRACT.abi,
//   //     OTC_CONTRACT.address
//   //   );

//   //   await contract.methods
//   //     .showPriceofCurrentTier()
//   //     .call({ from: address }, (err: any, data: any) => {
//   //       if (err) {
//   //         reject(err);
//   //       }
//   //       resolve(data);
//   //     });
//   // });
// }

// export async function callShowWhatLeftInTier(address: string, web3: any) {
//   const contract = new web3.eth.Contract(
//     OTC_CONTRACT.abi,
//     OTC_CONTRACT.address
//   );

//   try {
//     const result = await contract.methods
//       .showWhatsLeftinTier()
//       .call({ from: address });
//     return { result: result, error: null };
//   } catch (error) {
//     return { result: false, error };
//   }
//   // return new Promise(async (resolve, reject) => {
//   //   const contract = new web3.eth.Contract(
//   //     OTC_CONTRACT.abi,
//   //     OTC_CONTRACT.address
//   //   );

//   //   await contract.methods
//   //     .showWhatsLeftinTier()
//   //     .call({ from: address }, (err: any, data: any) => {
//   //       if (err) {
//   //         reject(err);
//   //       }
//   //       resolve(data);
//   //     });
//   // });
// }

// export async function callShowBV3Amount(address: string, web3: any) {
//   const contract = new web3.eth.Contract(
//     OTC_CONTRACT.abi,
//     OTC_CONTRACT.address
//   );

//   try {
//     const result = await contract.methods
//       .showHOWMUCHBV3()
//       .call({ from: address });
//     return { result: result, error: null };
//   } catch (error) {
//     return { result: false, error };
//   }
//   // return new Promise(async (resolve, reject) => {
//   //   const contract = new web3.eth.Contract(
//   //     OTC_CONTRACT.abi,
//   //     OTC_CONTRACT.address
//   //   );

//   //   await contract.methods
//   //     .showHOWMUCHBV3()
//   //     .call({ from: address }, (err: any, data: any) => {
//   //       if (err) {
//   //         reject(err);
//   //       }
//   //       resolve(data);
//   //     });
//   // });
// }

// export function callShowTortugaETH(address: string, web3: any) {
//   return new Promise(async (resolve, reject) => {
//     const contract = new web3.eth.Contract(
//       SWAP_CONTRACT.abi,
//       SWAP_CONTRACT.address
//     );

//     await contract.methods
//       .displayETH()
//       .call({ from: address }, (err: any, data: any) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//   });
// }

// export function callShowSwappableUSDT(address: string, web3: any) {
//   return new Promise(async (resolve, reject) => {
//     const contract = new web3.eth.Contract(
//       SWAP_CONTRACT.abi,
//       SWAP_CONTRACT.address
//     );

//     await contract.methods
//       .returnSwapableMaximumExactly()
//       .call({ from: address }, (err: any, data: any) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//   });
// }

// export function callShowMaxSwappableBV3(address: string, web3: any) {
//   return new Promise(async (resolve, reject) => {
//     const contract = new web3.eth.Contract(
//       SWAP_CONTRACT.abi,
//       SWAP_CONTRACT.address
//     );

//     await contract.methods
//       .maximum_swappable()
//       .call({ from: address }, (err: any, data: any) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//   });
// }

// export function callShowMinSwappableBV3(address: string, web3: any) {
//   return new Promise(async (resolve, reject) => {
//     const contract = new web3.eth.Contract(
//       SWAP_CONTRACT.abi,
//       SWAP_CONTRACT.address
//     );

//     await contract.methods
//       .return_Minimum_Swap_BV3A()
//       .call({ from: address }, (err: any, data: any) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//   });
// }

// export function callShowCurrentBV3Price(address: string, web3: any) {
//   return new Promise(async (resolve, reject) => {
//     const contract = new web3.eth.Contract(
//       SWAP_CONTRACT.abi,
//       SWAP_CONTRACT.address
//     );

//     await contract.methods
//       .returnBv3inDollars("1000000000000000000")
//       .call({ from: address }, (err: any, data: any) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//   });
// }

// export function callShowTortuaSwapFee(address: string, web3: any) {
//   return new Promise(async (resolve, reject) => {
//     const contract = new web3.eth.Contract(
//       SWAP_CONTRACT.abi,
//       SWAP_CONTRACT.address
//     );

//     await contract.methods
//       .returnFEEVIEW_in_ETH()
//       .call({ from: address }, (err: any, data: any) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//   });
// }

// export async function callConductSwap(
//   address: string,
//   web3: any,
//   amount: string
// ) {
//   try {
//     const config = {
//       paymasterAddress: paymasterAddress,
//       // jsonStringifyRequest: true,
//       // gasPriceFactorPercent: 20,
//       preferredRelays: ["https://bv3arelayer.com"],
//       blacklistedRelays: ["https://arbitrum.3-0-0-beta-3.opengsn.org/v3"],
//       // methodSuffix: "_v4",
//       // chainId: 42161,
//       // relayLookupWindowBlocks: 1e5,
//       // relayRegistrationLookupBlocks: 1e5,
//       // pastEventsQueryMaxPageSize: 2e4,
//       trustedForwarder: "0xB2b5841DBeF766d4b521221732F9B618fCf34A87",
//       // gasPriceSlackPercent: 900,
//       // calldataEstimationSlackFactor: 50,
//       // minMaxPriorityFeePerGas: 10**9,
//       performDryRunViewRelayCall: false,
//       maxViewableGasLimit: "25000000",
//       // performEstimateGasFromRealSender: true,
//       // gasPriceOracleUrl: "https://arbitrum.3-0-0-beta-3.opengsn.org/v3/getaddr",
//       // gasPriceOraclePath: "minMaxPriorityFeePerGas"
//     };

//     const gsnProvider = RelayProvider.newProvider({
//       provider: web3.currentProvider,
//       config,
//     });
//     await gsnProvider.init();

//     let web3_: any = new Web3(gsnProvider as any);

//     const contract = new web3_.eth.Contract(
//       SWAP_CONTRACT.abi,
//       SWAP_CONTRACT.address
//     );

//     const response = await contract.methods
//       .conductSwap(web3_.utils.toWei(amount).toString())
//       .send({
//         from: address,
//         maxPriorityFeePerGas: 1,
//         maxFeePerGas: 10 ** 8,
//         gasLimit: 25_000_000,
//       });

//     console.log({ response });

//     return true;
//   } catch {
//     return false;
//   }
// }
