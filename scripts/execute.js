const main = async () => {
    // This will actually compile our contract and generate the necessary 
    // files we need to work with our contract under the artifacts directory.
    const cakeContractFactory = await hre.ethers.getContractFactory('CakeBoard');
    const cakeContract = await cakeContractFactory.deploy();

    await cakeContract.deployed();

    console.log('Cake contract is deployed to: ', cakeContract.address);
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