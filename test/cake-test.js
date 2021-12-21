const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Cake Contract", function () {
  it("My first cake contract test", async function () {
    const cakeContractFactory = await ethers.getContractFactory("CakeBoard");
    const cakeContract = await cakeContractFactory.deploy({
      value: hre.ethers.utils.parseEther('0.1')
    });
    await cakeContract.deployed();
    console.log('CakeBoard Contract Deployed To: ', cakeContract.address);
    
    let contractBalance = await hre.ethers.provider.getBalance(cakeContract.address);
    console.log('Balance of the contract before buyCake Txn: ', contractBalance);
    expect(await hre.ethers.utils.formatEther(contractBalance)).to.equal('0.1');


    const buyCakeTxn = await cakeContract.buyCake(
      'This is No 1 Cake',
      'Alice',
      ethers.utils.parseEther('0.01')
    )
    await buyCakeTxn.wait();
    contractBalance = await hre.ethers.provider.getBalance(cakeContract.address);
    console.log('Balance of the contract after buyCake Txn: ', contractBalance);
    expect(await hre.ethers.utils.formatEther(contractBalance)).to.equal('0.09');
  });
});
