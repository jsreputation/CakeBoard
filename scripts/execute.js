const main = async () => {
    
    const cakeContractFactory = await hre.ethers.getContractFactory('CakeBoard');
    // Deposit 0.1 ether to the buyer contract in order to enable to buy cake
    const cakeContract = await cakeContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1'),
    });

    await cakeContract.deployed();
    console.log('Cake contract is deployed to: ', cakeContract.address);
    // Get initial balance of the buyer contract which would be 0.1
    let contractBalance = await hre.ethers.provider.getBalance(cakeContract.address);
    console.log('Contract Balance: ', hre.ethers.utils.formatEther(contractBalance))
    // Occur the transaction by calling buyCake method in CakeBoard.sol
    const cakeTxn = await cakeContract.buyCake('This is No 1 Cake', 'Alice', ethers.utils.parseEther('0.01'));
    await cakeTxn.wait();
    // Get buyer contract balance after transaction which would be 0.09
    contractBalance = await hre.ethers.provider.getBalance(
        cakeContract.address
    );
    console.log("Contract Balance after transaction:",
        hre.ethers.utils.formatEther(contractBalance)
    );
    // Get the list of cakes sold
    let allCakes = await cakeContract.getAllCakes();
    console.log(allCakes);
}

const executeMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

executeMain();