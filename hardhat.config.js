require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/z5Y23IoLzFP0Vdq3ZkGvxRsTHAHKK1Tb",
      accounts: ["2cf0261644a795ce2afa01b14f1c0b8bbcc0717cc8b47956e7e291208b4c9851"],
    },
  },
};

// 0x6ABaEe57A542542B9087808230E370a24aCc8C37