import { web3Instance } from './connectWallet';
import CakeBoardAbi from '../abi/CakeBoard.json';

export const buyCake = async () => {
    console.log(process.env.TEST_CONTRACT_ADDRESS);
    const contract = web3Instance.eth.contract(
        CakeBoardAbi.abi,
        process.env.TEST_CONTRACT_ADDRESS    
    );
        
    
}