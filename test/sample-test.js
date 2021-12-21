const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", function () {
  it("Should return the new greeting once it's changed", async function () {
    const cakeContractFactory = await ethers.getContractFactory("CakeBoard");
    const cakeContract = await cakeContractFactory.deploy();
    await cakeContract.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
