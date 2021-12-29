import Web3 from 'web3';
import { successAlert, warnAlert, errorAlert } from './toastr';

export let web3Instance;

export const connectWallet = async () => {
    successAlert();
    try {
        const { ethereum } = window;
        if (ethereum) {
            // provider is a connection to the ethereum node
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            if(accounts.length > 0) {
                console.log(`https://rinkeby.infura.io/v3/${process.env.rinkeby_infura_key}`);
                // web3Instance = new Web3(`https://rinkeby.infura.io/v3/${process.env.rinkeby_infura_key}`);     
                // console.log(web3Instance);
            } else {
                errorAlert(error.message);
            }
        } else {
            warnAlert();
            return false;
        }
    } catch(error) {
        errorAlert(error);
    }
}

export const checkWalletConnection = async () => {
    try {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            console.log(accounts[0]);
            if(accounts.length > 0) {
                web3Instance = new Web3(`https://rinkeby.infura.io/v3/${process.env.rinkeby_infura_key}`);
                successAlert();
            } else {
                warnAlert();
            }
        }
    } catch(error) {
        errorAlert(error);
    }
}
