import Web3 from "web3";
import MarketPlace from "../assets/abis/MarketPlace.json";
import ExchangeV1 from "../assets/abis/ExchangeV1.json";
import RaribleToken from "../assets/abis/RaribleToken.json";
import WETH from "../assets/abis/WETH.json";
import store from "../store";

import { ZERO_ADDRESS, ONE_ETHER, ASSET_TYPE } from "./Constants";

export const Web3Ultils = {
  sellItem: async function (item, nftAddress, status, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Create Order");

        const createOrder = await myContractMarketPlace.methods
                  .createOrder(
                    nftAddress,
                    item.token_id,
                    item.min_bid,
                    item.expire_bid,
                    item.is_market_option
                  ).send({ from: metaMaskAddress });
  
        if (createOrder) {
          item.sell_transaction_hash = createOrder.transactionHash;
          await store.dispatch("item/editItem", item);
          await store.dispatch("auction/createOrder", 
          {
            collection_id: item.collection_id,
            token_id: item.token_id,
            owner: item.owner,
            min_bid: item.min_bid,
            start_at: item.start_at,
            expires_at: item.expires_at,
          });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "List",
                price: item.min_bid,
                from: metaMaskAddress,
                to: process.env.VUE_APP_ZEROADDRESS
              });
        }

        return true;

      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   
              kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  updateOrder: async function (item, nftAddress, price, auctionId, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Update Order");

        const updateOrder = await myContractMarketPlace.methods
                  .updateOrder(
                    nftAddress,
                    item.token_id,
                    price
                  ).send({ from: metaMaskAddress });
  
        if (updateOrder) {
          item.sell_transaction_hash = updateOrder.transactionHash;
          await store.dispatch("item/editItem", 
            {
              id: item.id,
              min_bid: price
            }
          );

          await store.dispatch("auction/updateOrder", 
          {
            id: auctionId,
            min_bid: price,
          });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "Update List",
                price: price,
                from: metaMaskAddress,
                to: process.env.VUE_APP_ZEROADDRESS
              });
        }

        return true;

      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   
              kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  cancelOrder: async function (item, nftAddress, auctionId, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Cancel Order");

        const cancelOrder = await myContractMarketPlace.methods
                  .cancelOrder(
                    nftAddress,
                    item.token_id
                  ).send({ from: metaMaskAddress });
  
        if (cancelOrder) {
          item.sell_transaction_hash = cancelOrder.transactionHash;
          await store.dispatch("item/editItem", 
            {
              id: item.id,
              is_on_market: 0
            }
          );

          await store.dispatch("auction/updateOrder", 
          {
            id: auctionId,
            closed: 2,
          });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "Cancel List",
                price: 0,
                from: metaMaskAddress,
                to: process.env.VUE_APP_ZEROADDRESS
              });
        }

        return true;

      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   
              kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  buyItem: async function (item, nftAddress, auctionId, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        //Sign Exchange
        await store.dispatch("global/setLoadingTitle", "Buy Item");
        const buyItem = await myContractMarketPlace.methods
                .Buy(nftAddress, item.token_id)
                .send({ from: metaMaskAddress, value: `${item.minBid * ONE_ETHER}` });

        if (buyItem) {
          await store.dispatch("item/editItem", 
            {
              id: item.id,
              last_bid: item.min_bid,
              owner: metaMaskAddress,
            }
          );

          await store.dispatch("item/updateOwner", {
            id: item.id,
            owner: metaMaskAddress,
          });

          await store.dispatch("auction/updateOrder", 
          {
            id: auctionId,
            last_bid: item.min_bid,
            winner: metaMaskAddress,
            closed: 1
          });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "Sell",
                price: item.last_bid,
                from: metaMaskAddress,
                to: item.owner
              });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "Transfer",
                price: 0,
                from: item.owner,
                to: metaMaskAddress
              });
        }

        return true;
      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  placeBid: async function (item, nftAddress, price, startAt, expiresAt, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Place Bid");
        const placeBid = await myContractMarketPlace.methods
              .placeBid(nftAddress, item.token_id)
              .send({ from: metaMaskAddress, value: `${price * ONE_ETHER}` });

        if (placeBid) {
          await store.dispatch("item/editItem", 
            {
              id: item.id,
              hasBid: 1,
            }
          );

          await store.dispatch("auction/addOffer", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                proposed_by: metaMaskAddress,
                price: price,
                startAt: startAt,
                expiresAt: expiresAt,   // = oder.expiresAt + 7 days
                type: 0,                // 0 -> bid, 1 -> offer
                closed: 0               // 0 -> open, 1 -> accept, 2 -> cancel
              });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "Bid",
                price: price,
                from: metaMaskAddress,
                to: process.env.VUE_APP_ZEROADDRESS
              });
        }

        return true;
      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  cancelBid: async function (item, nftAddress, bidID, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Cancel bid");
        const cancelBid = await myContractMarketPlace.methods
          .cancelBid(nftAddress, item.token_id)
          .send({ from: metaMaskAddress});

        if (cancelBid) {
          await store.dispatch("item/editItem", 
            {
              id: item.id,
              hasBid: 0,
            }
          );

          await store.dispatch("auction/updateOffer", 
              {
                id: bidID,
                closed: 2               // 0 -> open, 1 -> accept, 2 -> cancel
              });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "Cancel Bid",
                price: item.last_bid,
                from: metaMaskAddress,
                to: process.env.VUE_APP_ZEROADDRESS
              });
        }

        return true;
      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message26jy62xw
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  acceptBid: async function (item, nftAddress, price, buyer, bidId, auctionId, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Accept Bid");
        const acceptBid = await myContractMarketPlace.methods
          .acceptBid(nftAddress, item.token_id, price)
          .send({ from: metaMaskAddress });

        if (acceptBid) {
          await store.dispatch("item/editItem", 
            {
              id: item.id,
              last_bid: price,
              owner: buyer,
            }
          );

          await store.dispatch("auction/updateOrder", 
          {
            id: auctionId,
            last_bid: price,
            winner: buyer,
            closed: 1
          });

          await store.dispatch("auction/updateOffer", {
            id: bidId,
            closed: 1               // 0 -> open, 1 -> accept, 2 -> cancel
          });

          await store.dispatch("activity/addActivity", {
            collection_id: item.collection_id,
            token_id: item.token_id,
            event: "Sell",
            price: item.last_bid,
            from: buyer,
            to: metaMaskAddress
          });

          await store.dispatch("activity/addActivity", {
            collection_id: item.collection_id,
            token_id: item.token_id,
            event: "Transfer",
            price: 0,
            from: metaMaskAddress,
            to: buyer
          });
        }

        return true;
      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  makeOffer: async function (item, nftAddress, price, startAt, expiresAt, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Make Offer");
        const makeOffer = await myContractMarketPlace.methods
              .makeOffer(nftAddress, item.token_id, price, expiresAt)
              .send({ from: metaMaskAddress});

        if (makeOffer) {
          await store.dispatch("auction/addOffer", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                proposed_by: metaMaskAddress,
                price: price,
                startAt: startAt,
                expiresAt: expiresAt,   // = oder.expiresAt + 7 days
                type: 1,                // 0 -> bid, 1 -> offer
                closed: 0               // 0 -> open, 1 -> accept, 2 -> cancel
              });
          
          await store.dispatch("activity/addActivity", 
          {
            collection_id: item.collection_id,
            token_id: item.token_id,
            event: "Offer",
            price: price,
            from: metaMaskAddress,
            to: process.env.VUE_APP_ZEROADDRESS
          });
        }

        return true;
      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  cancelOffer: async function (item, nftAddress, index, price, offerId, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Cancel Offer");
        const cancelOffer = await myContractMarketPlace.methods
          .cancelOffer(nftAddress, item.token_id, index)
          .send({ from: metaMaskAddress});

        if (cancelOffer) {
          await store.dispatch("auction/updateOffer", {
            id: offerId,
            closed: 2               // 0 -> open, 1 -> accept, 2 -> cancel
          });

          await store.dispatch("activity/addActivity", 
          {
            collection_id: item.collection_id,
            token_id: item.token_id,
            event: "Cancel Offer",
            price: price,
            from: metaMaskAddress,
            to: process.env.VUE_APP_ZEROADDRESS
          });
        }

        return true;
      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  acceptOffer: async function (item, nftAddress, buyer, price, index, offerId, auctionId, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_MARKETPLACE) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const myContractMarketPlace = new window.web3.eth.Contract(
          MarketPlace,
          process.env.VUE_APP_MARKETPLACE
        );

        await store.dispatch("global/setLoadingTitle", "Accept Offer");
        const acceptOffer = await myContractMarketPlace.methods
            .acceptOffer(nftAddress, item.token_id, index)
            .send({ from: metaMaskAddress});

        if (acceptOffer) {
          await store.dispatch("item/editItem", 
            {
              id: item.id,
              last_bid: price,
              owner: buyer,
            }
          );

          await store.dispatch("auction/updateOffer", {
            id: offerId,
            closed: 1               // 0 -> open, 1 -> accept, 2 -> cancel
          });

          await store.dispatch("auction/updateOrder", 
          {
            id: auctionId,
            last_bid: price,
            winner: buyer,
            closed: 1
          });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "Sell",
                price: price,
                from: buyer,
                to: metaMaskAddress
              });

          await store.dispatch("activity/addActivity", 
              {
                collection_id: item.collection_id,
                token_id: item.token_id,
                event: "Transfer",
                price: 0,
                from: metaMaskAddress,
                to: buyer
              });
        }

        return true;
      } catch (error) {
        if (error.message) {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error.message
              }
          );
        } else {
          store.dispatch("global/showMessage",
              {   kind:'show_error',
                  content: error
              }
          );
        }
        return false;
      }
    } else {
      this.$store.dispatch("global/showMessage",
          {   kind:'show_error',
              content: 'Non-Ethereum browser detected. You should consider trying MetaMask!'
          }
      );
      return false;
    }
  },

  approveToken: async function (price, metaMaskAddress) {
    const wethContract = new window.web3.eth.Contract(
      WETH,
      process.env.VUE_APP_WETH
    );

    const allowance = await wethContract.methods
      .allowance(metaMaskAddress, process.env.VUE_APP_MARKETPLACE)
      .call();

    const totalSupply = await wethContract.methods.totalSupply().call();

    if (allowance < price * ONE_ETHER) {
      const approve = await wethContract.methods
        .approve(process.env.VUE_APP_MARKETPLACE, totalSupply)
        .send({ from: metaMaskAddress });
    }
  },
};
