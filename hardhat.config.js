require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path:/wave-portal/.env});

module.exports = {
  solidity: "0.8.0",
  networks: {
    matic: {
      url: process.env.MATIC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// 0x6ABaEe57A542542B9087808230E370a24aCc8C37