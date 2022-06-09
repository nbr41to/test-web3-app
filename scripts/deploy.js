const hre = require('hardhat');

async function main() {
  const HelloContract = await hre.ethers.getContractFactory('Hello');
  const helloContract = await HelloContract.deploy();

  await helloContract.deployed();

  console.log('Hello deployed to:', helloContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
