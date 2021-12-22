import CakeBoard from '../abi/CakeBoard.json';
import Web3 from 'web3';

export const connectWallet = async () => {
    const { ethereum } = window;
    if (ethereum) {
        // provider is a connection to the ethereum node
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        let web3 = new Web3(ethereum);
        const contract = new web3.eth.contract(
            CakeBoard.abi,
            process.env.TESTNET_CONTRACT_ADDRESS);         
      }
}

export const checkWalletConnection = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        console.log(accounts[0]);
        if(accounts.length) {
            
        } else {
            
        }
        const chainId = await window.ethereum.request({ method: 'eth_chainId'});
        console.log(chainId);
    }
}
