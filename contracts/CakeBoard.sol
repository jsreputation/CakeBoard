// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract CakeBoard {
    uint256 numberOfCakesBought; // Total number of cakes bought
    address payable public owner; 
    // Event to be logged to the network whenever new cake is bought
    event CakeBought (
        address indexed from,
        uint256 timestamp,
        string message,
        string name
    );

    constructor() payable {
        owner = payable(msg.sender);
    }
    // Structure of cake - you can customize whatever you want.
    struct Cake {
        address offerer;
        string message;
        string name;
        uint timestamp;
    }

    Cake[] cakes;
    // Returns the Cake-type array which shows the details of each cake sold
    function getAllCakes() public view returns(Cake[] memory) {
        return cakes;
    }
    // Returns the total number of cakes sold
    function getNumberOfCakesBought() public view returns(uint256) {
        return numberOfCakesBought;
    }
    // The buy function which will be called from the client side via frontend
    function buyCake(string memory _message, string memory _name, uint _payAmount) public payable {
        uint256 cost = 0.01 ether;
        require(_payAmount <= cost, "Not enough Ether for cake");

        numberOfCakesBought += 1;
        console.log('%s has just bought a piece of cake', msg.sender);

        cakes.push(Cake(msg.sender, _message, _name, block.timestamp));
        (bool success,) = owner.call{value: _payAmount}('');
        // use below method when tested with execute.js
        // (bool test,) = owner.call{value: address(this).balance}('');
        // require(test, 'Failed to send money');
        require(success, 'Failed to send money');

        emit CakeBought(msg.sender, block.timestamp, _message, _name);
    }


}

