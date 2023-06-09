require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/nmVwG8xrVjo9LyFN4apZexMZBMpv413e",// Polygon url
      accounts: ["9f79d2d9e327e3a9a322f951806c70fcc728497291757eda0049e883db8c2b54"]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};