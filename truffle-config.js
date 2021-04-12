
  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  const HDWalletProvider = require('truffle-hdwallet-provider');
  const { mnemonic, BSCSCANAPIKEY} = require('./env.json');
  
  module.exports = {
    plugins: [
      'truffle-plugin-verify'
    ],
    api_keys: {
      bscscan: BSCSCANAPIKEY
    },
    networks: {
      development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 7545,            // ganache-cli-port:8545 , ganache desktop app port : 7545
        network_id: "*",       // Any network (default: none)
      },
      testnet: {
        provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
        network_id: 97,
        confirmations: 10,
        timeoutBlocks: 200,
        skipDryRun: true
      },
      bsc: {
        provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
        network_id: 56,
        confirmations: 10,
        timeoutBlocks: 200,
        skipDryRun: true
      },
    },
  
    // Set default mocha options here, use special reporters etc.
    mocha: {
      // timeout: 100000
    },
  
    // Configure your compilers
    compilers: {
      solc: {
         version: "0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
          enabled: true,
         runs: 200
        },
        evmVersion: "byzantium"
        
      }
    }
  }
}
