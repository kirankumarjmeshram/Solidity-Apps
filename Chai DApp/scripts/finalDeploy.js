const hre = require("hardhat");

async function main() {
    const chai =  await hre.ethers.getContractFactory("chai"); // calling contract named chai
    const contract =await chai.deploy();//creating instance of contact(chai)
  
    await contract.deployed(); // deployed contract on hardhat own blockchain
    console.log(`Address of contract :`,contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

//npx hardhat run --network mumbai scripts/finalDeploy.js
//Address of contract : 0xeC5d9C15470ff8a71510EcED2874e6084be73b1C