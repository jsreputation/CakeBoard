import CakeBoard from '../abi/CakeBoard.json';
import Web3 from 'web3';

export let web3Instance;

export const connectWallet = async () => {
    try {
        const { ethereum } = window;
        if (ethereum) {
            // provider is a connection to the ethereum node
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });      
        } else {

        }
    } catch(error) {
        alert('Trying Connection but failed: ', error);
    }
}

export const checkWalletConnection = async () => {
    try {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            console.log(accounts[0]);
            if(accounts.length) {
                
            } else {
                alert('make sure you have metamask connected');
            }
            // const chainId = await window.ethereum.request({ method: 'eth_chainId'});
            // console.log(chainId);
        }
    } catch(error) {
        alert('Connection Error: ', error);
    }
}
