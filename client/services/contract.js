import { web3Instance } from './connectWallet';
// import Web3 from 'web3';
import CakeBoardAbi from '../abi/CakeBoard.json';

export const buyCake = async () => {
    console.log(process.env.TEST_CONTRACT_ADDRESS);
    console.log(web3Instance);
    let contract = web3Instance.eth.contract(
        CakeBoardAbi.abi,
        process.env.TEST_CONTRACT_ADDRESS    
    );
    const result = await contract.methods.buyCake().call();
    console.log(result);
}

export const getCakes = async () => {
    const contract = new web3Instance.eth.contract(
        CakeBoardAbi.abi,
        process.env.TEST_CONTRACT_ADDRESS
    );
    const result = await contract.methods.getCakes().call();
    console.log(result);
}