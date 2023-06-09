const hre = require("hardhat");

async function main() {
    const chai =  await hre.ethers.getContractFactory("RentAgriment"); // calling contract named chai
    const contract =await chai.deploy();//creating instance of contact(chai)
  
    await contract.deployed(); // deployed contract on hardhat own blockchain
    console.log(`Address of contract :`,contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

//npx hardhat run --network mumbai scripts/finalDeploy.js
//Address of contract : 0x8806f61e1400dB6b84F3D73DAdDDCB9ad4522BFa
//0x579496973fFfE2Bd5528Dd9A1a46e9db499fF3C0
//0x5DC47161c060896C635AE71D06aF80d88C9c8d31
//0xe00A956E86654dBF48cc775b061311b266BAe305

