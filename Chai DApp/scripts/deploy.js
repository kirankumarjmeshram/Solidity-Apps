const hre = require("hardhat");


async function getBalances(address){
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function consoleBalance(addresses){
  let counter = 0;
  for(const address of addresses){
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}

async function consoleMemos(memos){
  for(const memo of memos){
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.address;
    const message = memo.message;

    console.log(
      `At ${timestamp},name ${name},address ${from},message ${message}`
    );
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai =  await hre.ethers.getContractFactory("chai"); // calling contract named chai
  const contract =await chai.deploy();//creating instance of contact(chai)

  await contract.deployed(); // deployed contract on hardhat own blockchain
  console.log(`Address of contract :`,contract.address);

  const addresses = [owner.address, from1.address, from2.address, from3.address, contract.address];
  console.log('before buying chai');
  await consoleBalance(addresses);
  
  const amount = {value:hre.ethers.utils.parseEther("1")};
  await contract.connect(from1).buyChai("From1","Vey Nice chai1", amount);
  await contract.connect(from2).buyChai("From2","Vey Nice chai2", amount);
  await contract.connect(from3).buyChai("From3","Vey Nice chai3", amount);

  console.log('after buying chai');
  await consoleBalance(addresses);
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
