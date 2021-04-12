const HDWalletProvider = require('truffle-hdwallet-provider');
const { mnemonic, BSCSCANAPIKEY} = require('../env.json');

const Zpound = artifacts.require("Zpound");

module.exports = async function (deployer) {
  await deployer.deploy(Zpound,"zpound","zpx",18,6000000000000);
  const deployedZpound = await Zpound.deployed();
  console.log("Address: "+ deployedZpound.address);
  let total = await deployedZpound.totalSupply();
  console.log("Total Supply :", total);
};
