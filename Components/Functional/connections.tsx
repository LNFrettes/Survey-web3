import Web3 from "web3";
import  abi from '../../Data/abi.json'
import {AbiItem} from 'web3-utils'
declare var window: any




const web = new Web3('https://ropsten.infura.io/v3/7aebc02cf8ef490b93f155395f972e84')
var contract = new  web.eth.Contract(abi as AbiItem[], '0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03')


  
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
        to: '0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03', 
        from: address[0], 
        value: 0,
        data: contract.methods.submit(1, [1]).encodeABI() 
    };

 
    const txHash = await window.ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
      console.log(txHash)
    
      // window.ethereum.request({
      //   method: 'wallet_watchAsset',
      //   params: {
      //     type: 'ERC20',
      //     options: {
      //       address: '0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03',
      //       symbol: 'QUIZ',
      //       decimals: 18, 
      //     },
      //   },
      // }).then((success: boolean) => {
      //   if (success) {
      //     console.log('FOO successfully added to wallet!');
      //   } else {
      //     throw new Error('Something went wrong.');
      //   }})
    }


  
  
export {web, contract, getBalance, mintToken}