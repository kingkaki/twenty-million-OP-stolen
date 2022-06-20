require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [{
      version: "0.5.3",
    }, {
      version: "0.8.4",
    }]
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        // blockNumber: 9084507
        blockNumber: 10607607
      },
      loggingEnabled: false,
    }
  }
};
