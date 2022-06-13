const hre = require("hardhat");

async function main() {
  const PixelKingsNFT = await hre.ethers.getContractFactory("PixelKingsNFT");
  const pixelKingsNFT = await PixelKingsNFT.deploy();

  await pixelKingsNFT.deployed();

  console.log("PixelKingsNFT deployed to:", pixelKingsNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
