const hre = require("hardhat");

async function main() {
    const auth =  await hre.ethers.getContractFactory("Auth");
    const contract =await auth.deploy();
  
    await contract.deployed(); 
    console.log(`Address of contract :`,contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
