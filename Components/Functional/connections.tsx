import Web3 from "web3";
import  abi from '../../Data/abi.json'
import { renderRopstenButton } from "../../src/Actions";


const web = new Web3('https://eth-ropsten.alchemyapi.io/v2/__kRrTi_nV3c2CZMzKkw0QfH44AVZ8_L')

var contract = new  web.eth.Contract(abi, '0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03')


  
  async function getAccount() {
    const address = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return address[0]
  }

  async function getBalance(){
    const address = await getAccount()
    const tokenBalance = await contract.methods.balanceOf(address).call()
    return tokenBalance

  };



  


  async function mintToken(){
    const address = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const transactionParameters = {
        to: '0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03', // Required except during contract publications.
        from: address[0], // must match user's active address.
        value: 0,
        data: contract.methods.submit(1, [1]).encodeABI() //make call to NFT smart contract 
    };

    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
        }
        console.log(txHash)
    } catch (error) {
      console.log(error.message)
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }


  }
  
export {web, contract, getBalance, mintToken}