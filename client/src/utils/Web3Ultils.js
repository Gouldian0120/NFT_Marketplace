import Web3 from "web3";
import ExchangeV1 from "../assets/abis/ExchangeV1.json";
import RaribleToken from "../assets/abis/RaribleToken.json";
import WETH from "../assets/abis/WETH.json";
import { failAlert } from "./ComponentUtils";
import store from "../store";

import { ZERO_ADDRESS, ONE_ETHER, ASSET_TYPE } from "./Constants";

export const Web3Ultils = {
  sellItem: async function (result, item, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_RARIBLE_ADDRESS) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();

        const myContractRaribleToken = new window.web3.eth.Contract(
          RaribleToken,
          process.env.VUE_APP_RARIBLE_ADDRESS
        );
        //Mint Item
        if (!result.isMinted) {
          await store.dispatch("global/setLoadingTitle", "Mint Asset");
          await this.mintItem(
            result,
            item,
            myContractRaribleToken,
            metaMaskAddress
          );
        }

        //Approve
        if (process.env.VUE_APP_TRANSFER_PROXY) {
          await store.dispatch("global/setLoadingTitle", "Approve Asset");
          await this.approveItem(myContractRaribleToken, metaMaskAddress);

          //Sign Order
          if (process.env.VUE_APP_WETH && !item.sellOrder) {
            await store.dispatch("global/setLoadingTitle", "Sign Order Asset");
            await this.signOrder(result, item, metaMaskAddress);
          }
          return true;
        }
      } catch (error) {
        if (error.message) {
          failAlert({
            text: error.message,
          });
        } else {
          failAlert({
            text: error,
          });
        }
        return false;
      }
    } else {
      failAlert({
        text:
          "Non-Ethereum browser detected. You should consider trying MetaMask!",
      });
      return false;
    }
  },

  mintItem: async function (
    result,
    item,
    myContractRaribleToken,
    metaMaskAddress
  ) {
    const mint = await myContractRaribleToken.methods
      .mint(
        result.token_id,
        result.v,
        result.r,
        result.s,
        [
          {
            recipient: metaMaskAddress,
            value: item.royalties,
          },
        ],
        item.total_quantity,
        `/test_${result.token_id}`
      )
      .send({ from: metaMaskAddress }); // return mint address
    item.id = item._id;
    item.mintTransactionHash = mint.transactionHash;
    item.wallet_address = metaMaskAddress;
    store.dispatch("item/editItem", item);
  },

  approveItem: async function (myContractRaribleToken, metaMaskAddress) {
    const isApprove = await myContractRaribleToken.methods
      .isApprovedForAll(metaMaskAddress, process.env.VUE_APP_TRANSFER_PROXY)
      .call();

    if (!isApprove) {
      await myContractRaribleToken.methods
        .setApprovalForAll(process.env.VUE_APP_TRANSFER_PROXY, true)
        .send({ from: metaMaskAddress });
    }
  },

  signOrder: async function (result, item, metaMaskAddress) {
    const sellOrder = {
      key: {
        owner: metaMaskAddress,
        salt: new Date().getTime(),
        sellAsset: {
          token: process.env.VUE_APP_RARIBLE_ADDRESS,
          tokenId: result.token_id,
          assetType: ASSET_TYPE.ERC1155,
        },
        buyAsset: {
          // token: process.env.VUE_APP_WETH, //WETH
          token: ZERO_ADDRESS,
          tokenId: 0,
          // assetType: ASSET_TYPE.ERC20, // ERC20 use with WETH
          assetType: ASSET_TYPE.ETH,
        },
      },
      selling: 1,
      buying: `${item.minBid * ONE_ETHER}`,
      // sellerFee: 2500,//charge fee 25%
      sellerFee: process.env.VUE_APP_SELL_FEE,
    };

    const hash = web3.utils.keccak256(
      web3.eth.abi.encodeParameters(
        [
          {
            Order: {
              key: {
                owner: "address",
                salt: "uint256",
                sellAsset: {
                  token: "address",
                  tokenId: "uint256",
                  assetType: "uint",
                },
                buyAsset: {
                  token: "address",
                  tokenId: "uint256",
                  assetType: "uint",
                },
              },
              selling: "uint256",
              buying: "uint256",
              sellerFee: "uint256",
            },
          },
        ],
        [sellOrder]
      )
    );

    const signature = await web3.eth.personal.sign(
      hash.slice(2),
      metaMaskAddress
    );

    if (signature) {
      item.signature = signature;
      item.wallet_address = metaMaskAddress;
      item.id = item._id;
      item.isPutOnMarket = true;
      item.sellOrder = JSON.stringify(sellOrder);
      store.dispatch("item/editItem", item);
    }
  },
  convertSignature: async function (signature) {
    return {
      r: signature.substring(0, 66),
      s: `0x${signature.substring(66, 130)}`,
      v: `0x${signature.substring(130, 132)}`,
    };
  },
  buyAsset: async function (result, item, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_EXCHANGE_V1) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();

        //Approve exchange token

        // await store.dispatch(
        //   "global/setLoadingTitle",
        //   "Approve Exchange Token"
        // );
        // await this.approveToken(item.minBid, metaMaskAddress);

        const exchangeV1 = new window.web3.eth.Contract(
          ExchangeV1,
          process.env.VUE_APP_EXCHANGE_V1
        );

        const signature = await this.convertSignature(result.signature);
        const buyerFeeSignature = await this.convertSignature(
          result.buyerFeeSignature
        );
        const sellOrder = JSON.parse(result.sellOrder);

        //Sign Exchange
        await store.dispatch("global/setLoadingTitle", "Sign Exchange");
        const exchangeResult = await exchangeV1.methods
          .exchange(
            [
              [
                sellOrder.key.owner,
                sellOrder.key.salt,
                [
                  sellOrder.key.sellAsset.token,
                  sellOrder.key.sellAsset.tokenId,
                  sellOrder.key.sellAsset.assetType,
                ],
                [
                  sellOrder.key.buyAsset.token,
                  sellOrder.key.buyAsset.tokenId,
                  sellOrder.key.buyAsset.assetType,
                ],
              ],
              sellOrder.selling,
              sellOrder.buying,
              sellOrder.sellerFee,
            ],
            [web3.utils.hexToNumber(signature.v), signature.r, signature.s],
            result.buyerFee,
            [
              web3.utils.hexToNumber(buyerFeeSignature.v),
              buyerFeeSignature.r,
              buyerFeeSignature.s,
            ],
            1,
            metaMaskAddress
          )
          .send({ from: metaMaskAddress, value: `${item.minBid * ONE_ETHER}` });

        if (exchangeResult) {
          await store.dispatch("item/updateOwner", {
            token_id: item.token_id,
            wallet_address: metaMaskAddress,
          });
        }

        return true;
      } catch (error) {
        if (error.message) {
          failAlert({
            text: error.message,
          });
        } else {
          failAlert({
            text: error,
          });
        }
        return false;
      }
    } else {
      failAlert({
        text:
          "Non-Ethereum browser detected. You should consider trying MetaMask!",
      });
      return false;
    }
  },

  approveToken: async function (price, metaMaskAddress) {
    const wethContract = new window.web3.eth.Contract(
      WETH,
      process.env.VUE_APP_WETH
    );

    const allowance = await wethContract.methods
      .allowance(metaMaskAddress, process.env.VUE_APP_ERC20_TRANSFER_PROXY)
      .call();

    const totalSupply = await wethContract.methods.totalSupply().call();

    if (allowance < price * ONE_ETHER) {
      const approve = await wethContract.methods
        .approve(process.env.VUE_APP_ERC20_TRANSFER_PROXY, totalSupply)
        .send({ from: metaMaskAddress });

    }
  },
};
